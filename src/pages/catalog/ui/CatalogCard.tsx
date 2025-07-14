import { Anime } from "@shared/api/type/type";
import styles from "./CatalogCard.module.scss";
import StarIcon from "@shared/assets/icon/star.svg?react";
import Clock from "@shared/assets/icon/clock.svg?react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@shared/ui/skeleton/Skeleton";

interface CatalogCardProps {
  item: Anime;
}

export const CatalogCard = ({ item }: CatalogCardProps) => {
  const cleanDesc = useMemo(() => {
    if (!item.description) return "No description available";
    return item.description.replace(/<[^>]*>/g, "");
  }, []);

  return (
    <Link to={`/anime/${item.id}`} className={styles.link}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <img
            src={item.coverImage?.large}
            alt={item.title?.romaji}
            className={styles.img}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{item.title?.romaji}</h3>
          <div className={styles.titleInfo}>
            <div className={styles.ratingWrapper}>
              <StarIcon className={styles.icon} />
              {item.averageScore ? (
                <span className={styles.rating}>
                  {(item.averageScore / 10).toFixed(1)}
                </span>
              ) : (
                <span className={styles.rating}>N/A</span>
              )}
            </div>
            <div className={styles.duration}>
              <Clock className={styles.icon} />
              <span>{item.duration}</span>
            </div>
          </div>
          <div className={styles.genres}>
            {item.genres?.slice(0, 3).map((genre, index) => (
              <span key={index} className={styles.genre}>{genre}</span>
            ))}
          </div>
          <div className={styles.desc}>{cleanDesc}</div>
        </div>
      </div>
    </Link>
  );
};
