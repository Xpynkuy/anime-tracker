import { LatestAnime } from "@features/LatestReleaseAnime";
import { PopularAnime } from "@features/PopularAnime";
import { TrendingAnime } from "@features/TrendingAnime";
import { NewSeasonAnime } from "@features/NewSeasonAnime";
import styles from "./MainPage.module.scss";
import { memo } from "react";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <PopularAnime />
      <LatestAnime />
      <div className={styles.infoBlock}>
        <div className={styles.trending}>
          <TrendingAnime />
        </div>
        <div className={styles.newSeason}>
          <NewSeasonAnime />
        </div>
      </div>
    </div>
  );
};

export default memo(MainPage);
