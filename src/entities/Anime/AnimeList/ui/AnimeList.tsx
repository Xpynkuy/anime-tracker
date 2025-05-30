import { AnimeCard } from "@entities/Anime/AnimeCard";
import { Anime } from "@shared/api/type/type";
import styles from "./AnimeList.module.scss";
import { AnimeBannerCard } from "@entities/Anime/AnimeBannerCard";

interface AnimeListProps {
  items: Anime[];
  cardVariant?: "default" | "banner";
}

const AnimeList = ({ items, cardVariant = "default" }: AnimeListProps) => {
  const CardComponent = cardVariant === "banner" ? AnimeBannerCard : AnimeCard;
  return (
    <div className={styles.list}>
      {items.map((anime) => (
        <CardComponent key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
