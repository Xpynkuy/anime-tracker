import { Anime } from "@shared/api/type/type";
import styles from "./AnimeDetailHeaderBlock.module.scss";
import Button, { ButtonVariant } from "@shared/ui/button/Button";
import StarIcon from "@shared/assets/icon/star.svg?react";
import Skeleton from "@shared/ui/skeleton/Skeleton";

export interface AnimeDetailHeaderBlockProps {
  anime: Anime;
  isLoading?: boolean;
}

const AnimeDetailHeaderBlock = ({
  anime,
  isLoading,
}: AnimeDetailHeaderBlockProps) => {
  if (isLoading) {
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.content}>
          <Skeleton width="200px" height="300px" border="4px" />
          <div className={styles.titleInfo}>
            <Skeleton width="300px" height="32px" border="4px" />
            <Skeleton width="100px" height="24px" border="4px" />
            <div className={styles.btns}>
              <Skeleton width="100px" height="40px" border="4px" />
              <Skeleton width="100px" height="40px" border="4px" />
              <Skeleton width="100px" height="40px" border="4px" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!anime) {
    return null;
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.bgImage}>
        <img
          src={anime.bannerImage}
          alt={anime.title?.romaji}
          className={styles.bgImg}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img
            src={anime.coverImage?.large}
            alt={anime.title?.romaji}
            className={styles.image}
          />
        </div>
        <div className={styles.titleInfo}>
          <h2>{anime.title?.romaji}</h2>
          {anime.averageScore ? (
            <span className={styles.rating}>
              <StarIcon className={styles.Icon} />
              {(anime.averageScore / 10).toFixed(1)}
            </span>
          ) : (
            <span className={styles.rating}>N/A</span>
          )}
          <div className={styles.btns}>
            <Button variant={ButtonVariant.PRIMARY}>Watching</Button>
            <Button variant={ButtonVariant.PRIMARY}>To Watch</Button>
            <Button variant={ButtonVariant.PRIMARY}>Watched</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailHeaderBlock;
