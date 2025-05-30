import { LatestAnime } from "@features/LatestReleaseAnime";
import { PopularAnime } from "@features/PopularAnime";
import styles from "./MainPage.module.scss";
import { TrendingBanner } from "@features/TrendingAnime";

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <PopularAnime />
      <LatestAnime />
      <TrendingBanner/>
    </div>
  );
};

export default MainPage;
