import Skeleton from "@shared/ui/skeleton/Skeleton";
import styles from "./AnimeCard.module.scss";
const AnimeCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Skeleton className={styles.image} />
        <span className={styles.rating}>
          <Skeleton width={"20px"} height={"10px"} />
        </span>
      </div>
    </div>
  );
};

export default AnimeCardSkeleton;
