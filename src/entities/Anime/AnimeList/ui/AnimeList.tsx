import { AnimeCard } from "@entities/Anime/AnimeCard";
import type { Anime } from "@shared/api/type/type";
import styles from "./AnimeList.module.scss";

import type { EmblaOptionsType } from "embla-carousel";
import { Carousel } from "@entities/Carousel/ui/Carousel";
import { AnimeCompactCard } from "@entities/Anime/AnimeCompactCard/ui/AnimeCompactCard";

interface AnimeListProps {
  items: Anime[];
  displayMode?: "carousel" | "grid" | "flex";
  cardVariant?: "default" | "banner" | "compact";
  carouselOptions?: EmblaOptionsType;
  className?: string;
  itemClassName?: string;
  gridColumns?: number;
  flexItemWidth?: string;
}

const AnimeList = ({
  items,
  displayMode = "grid",
  cardVariant = "default",
  carouselOptions = { align: "start" },
  className = "",
  itemClassName = "",
  gridColumns = 5,
  flexItemWidth = "200px",
}: AnimeListProps) => {
  const renderItems = () => (
  <>
    {items.map((anime) => {
      const itemClasses = [
        styles.item,
        displayMode === "carousel" ? styles.slide : "",
        styles[cardVariant],
        itemClassName,
      ]
        .filter(Boolean)
        .join(" ");

      return (
        <div className={itemClasses} key={anime.id}>
          {/* Используем компактную карточку для варианта 'compact' */}
          {cardVariant === "compact" ? (
            <AnimeCompactCard anime={anime} />
          ) : (
            <AnimeCard anime={anime} />
          )}
        </div>
      );
    })}
  </>
);

  if (displayMode === "carousel") {
    return (
      <div className={className}>
        <Carousel
          options={carouselOptions}
          withControls={items.length > 1}
          className={styles.carouselWrapper}
        >
          {renderItems()}
        </Carousel>
      </div>
    );
  }

  if (displayMode === "grid") {
    return (
      <div
        className={`${styles.gridContainer} ${className}`.trim()}
        style={
          {
            "--grid-columns": gridColumns,
            "--grid-gap": "16px",
          } as React.CSSProperties
        }
      >
        {renderItems()}
      </div>
    );
  }

  return (
    <div
      className={`${styles.flexContainer} ${className}`.trim()}
      style={
        {
          "--flex-gap": "16px",
          "--item-width": flexItemWidth,
        } as React.CSSProperties
      }
    >
      {renderItems()}
    </div>
  );
};

export default AnimeList;
