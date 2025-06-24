import { Anime } from "@shared/api/type/type";
import styles from "./AnimeCard.module.scss";
import { Link } from "react-router-dom";
import { memo } from "react";

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeCard = memo(({ anime }: AnimeCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to={`/anime/${anime.id}`}>
          <img
            src={anime.coverImage?.large}
            alt={anime.title?.english}
            className={styles.image}
          />
        </Link>
        {anime.averageScore ? (
          <span className={styles.rating}>
            {(anime.averageScore / 10).toFixed(1)}
          </span>
        ) : (
          <span className={styles.rating}>N/A</span>
        )}
        <div className={styles.cardInfo}>
          <div className={styles.titleInfo}>
            {anime.genres?.slice(0, 1).map((genre) => (
              <span className={styles.genre}>{genre}</span>
            ))}
            <span className={styles.titleYear}>{anime.seasonYear}</span>
          </div>
          <span className={styles.titleName}>{anime.title?.romaji}</span>
        </div>
      </div>
    </div>
  );
});
