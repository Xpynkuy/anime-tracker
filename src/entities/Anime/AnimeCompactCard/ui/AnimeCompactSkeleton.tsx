import Skeleton from "@shared/ui/skeleton/Skeleton";
import styles from "./AnimeCompactCard.module.scss";
const AnimeCompactSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Skeleton className={styles.img} />
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <div className={styles.UpperInfo}>
            <Skeleton width={"30px"} height={"15px"}></Skeleton>
            <Skeleton width={"30px"} height={"15px"}></Skeleton>
          </div>
          <span className={styles.titleName}>
            <Skeleton width={"180px"} height={"20px"} />
          </span>
        </div>
        <div className={styles.ratingWrapper}>
          <Skeleton className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default AnimeCompactSkeleton;
