import { Anime } from "@shared/api/type/type";
import styles from "./AnimeCard.module.scss";

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={anime.coverImage?.large}
          alt={anime.title?.english}
          className={styles.image}
        />
        {anime.averageScore ? (
          <span className={styles.rating}>
            {(anime.averageScore / 10).toFixed(1)}
          </span>
        ) : (
          <span className={styles.rating}>N/A</span>
        )}
        <div className={styles.cardInfo}>
          <span className={styles.titleName}>{anime.title?.romaji}</span>
          <div className={styles.titleInfo}>
            <span className={styles.titleYear}>{anime.seasonYear},</span>
            {anime.genres?.slice(0, 1).map((genre) => (
              <span className={styles.genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
