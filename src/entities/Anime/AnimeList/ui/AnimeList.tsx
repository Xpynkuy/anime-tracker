import { AnimeCard } from "@entities/Anime/AnimeCard";
import type { Anime } from "@shared/api/type/type";
import styles from "./AnimeList.module.scss";

import type { EmblaOptionsType } from "embla-carousel";
import { Carousel } from "@entities/Carousel/ui/Carousel";
import { AnimeCompactCard } from "@entities/Anime/AnimeCompactCard/ui/AnimeCompactCard";
import { memo } from "react";
import AnimeCardSkeleton from "@entities/Anime/AnimeCard/ui/AnimeCardSkeleton";
import AnimeCompactSkeleton from "@entities/Anime/AnimeCompactCard/ui/AnimeCompactSkeleton";

interface AnimeListProps {
  items: Anime[];
  displayMode?: "carousel" | "grid" | "flex";
  cardVariant?: "default" | "compact";
  carouselOptions?: EmblaOptionsType;
  className?: string;
  itemClassName?: string;
  gridColumns?: number;
  flexItemWidth?: string;
  isLoading?: boolean;
  skeletonCount?: number;
}

const AnimeList = memo(
  ({
    items,
    displayMode = "grid",
    cardVariant = "default",
    carouselOptions = { align: "start" },
    className = "",
    itemClassName = "",
    gridColumns = 5,
    flexItemWidth = "200px",
    isLoading = false, 
    skeletonCount = 7,
  }: AnimeListProps) => {
    const renderItems = () => {
      // Скелетоны при загрузке
      if (isLoading) {
        return Array.from({ length: skeletonCount }).map((_, index) => {
          const itemClasses = [
            styles.item,
            displayMode === "carousel" ? styles.slide : "",
            styles[cardVariant],
            itemClassName,
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div className={itemClasses} key={`skeleton-${index}`}>
              {cardVariant === "compact" ? (
                <AnimeCompactSkeleton />
              ) : (
                <AnimeCardSkeleton />
              )}
            </div>
          );
        });
      }

      // Реальные данные
      return items.map((anime) => {
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
            {cardVariant === "compact" ? (
              <AnimeCompactCard anime={anime} />
            ) : (
              <AnimeCard anime={anime} />
            )}
          </div>
        );
      });
    };

    // Условия для разных режимов отображения
    if (displayMode === "carousel") {
      return (
        <div className={className}>
          <Carousel
            options={carouselOptions}
            withControls={items.length > 1 || isLoading} // Учитываем скелетоны
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
  }
);

export default AnimeList;