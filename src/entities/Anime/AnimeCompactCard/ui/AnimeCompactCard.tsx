import { Anime } from "@shared/api/type/type";
import styles from "./AnimeCompactCard.module.scss";
import StarIcon from "@shared/assets/icon/star.svg?react";
import { memo } from "react";

interface AnimeCompactCardProps {
  anime: Anime;
}

export const AnimeCompactCard = memo(({ anime }: AnimeCompactCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          src={anime.coverImage?.large}
          alt={anime.title?.romaji}
          className={styles.img}
        />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <div className={styles.UpperInfo}>
            <span>{anime.format}</span>
            <span>{anime.seasonYear}</span>
          </div>
          <span className={styles.titleName}>{anime.title?.romaji}</span>
        </div>
        <div className={styles.ratingWrapper}>
          <StarIcon className={styles.icon} />
          {anime.averageScore ? (
            <span className={styles.rating}>
              {(anime.averageScore / 10).toFixed(1)}
            </span>
          ) : (
            <span className={styles.rating}>N/A</span>
          )}
        </div>
      </div>
    </div>
  );
});
