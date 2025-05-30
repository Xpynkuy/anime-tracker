import { Anime } from "@shared/api/type/type";
import styles from "./AnimeBannerCard.module.scss";
import Button, { ButtonVariant } from "@shared/ui/button/Button";

interface AnimeBannerCardProps {
  anime: Anime;
}

export const AnimeBannerCard = ({ anime }: AnimeBannerCardProps) => {
  return (
    <div className={styles.bannerCard}>
      <div className={styles.imgWrapper}>
        <img
          src={anime.bannerImage}
          alt={anime.title?.romaji}
          className={styles.img}
        />
        <div className={styles.info}>
          <span className={styles.name}>{anime.title?.romaji}</span>
          <div className={styles.titleInfo}>
            {anime.genres?.slice(0, 3).map((genre) => (
              <span className={styles.genre}>{genre}</span>
            ))}
            <span>{anime.seasonYear}</span>
            <span>
                {anime.description}
            </span>
          </div>
          <Button variant={ButtonVariant.PRIMARY}>More...</Button>
        </div>
      </div>
    </div>
  );
};
