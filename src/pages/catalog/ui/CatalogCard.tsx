import { Anime } from "@shared/api/type/type";
import styles from "./CatalogCard.module.scss";
import StarIcon from "@shared/assets/icon/star.svg?react";
import Clock from "@shared/assets/icon/clock.svg?react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@shared/ui/skeleton/Skeleton";

interface CatalogCardProps {
  item: Anime;
  isLoading?: boolean;
}

export const CatalogCard = ({ item, isLoading }: CatalogCardProps) => {
  const cleanDesc = useMemo(() => {
    if (!item.description) return "No description available";
    return item.description.replace(/<[^>]*>/g, "");
  }, []);

  if (isLoading) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <Skeleton className={styles.img} />
        </div>
        <div className={styles.info}>
          <Skeleton width={"300px"} height={"20px"} className={styles.title} />
          <div className={styles.titleInfo}>
            <div className={styles.ratingWrapper}>
              <Skeleton
                width={"100px"}
                height={"20px"}
                className={styles.rating}
              />
            </div>
            <div className={styles.duration}>
              <Skeleton
                width={"100px"}
                height={"20px"}
                className={styles.duration}
              />
            </div>
          </div>
          <div className={styles.genres}>
            <Skeleton
              width={"100px"}
              height={"20px"}
              className={styles.genre}
            />
          </div>
          <div className={styles.desc}>
            <Skeleton
              width={"400px"}
              height={"100px"}
              className={styles.desc}
            />
          </div>
        </div>
      </div>
    );
  }

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
              <span className={styles.genre}>{genre}</span>
            ))}
          </div>
          <div className={styles.desc}>{cleanDesc}</div>
        </div>
      </div>
    </Link>
  );
};
