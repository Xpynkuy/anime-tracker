import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { getTrendingAnimeData } from "../model/selectors/getTrendingAnimeData/getTrendingAnimeData";
import { getTrendingAnimeIsLoading } from "../model/selectors/getTrendingAnimeIsLoading/getTrendingAnimeIsLoading";
import { getTrendingAnimeError } from "../model/selectors/getTrendingAnimeError/getTrendingAnimeError";
import { useEffect } from "react";
import { fetchTrendingAnime } from "../model/services/FetchTrendingAnime";
import Loader from "@shared/ui/loader/Loader";

import styles from "./TrendingAnime.module.scss";
import AnimeList from "@entities/Anime/AnimeList/ui/AnimeList";

export const TrendingAnime = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(getTrendingAnimeData);
  const isLoading = useAppSelector(getTrendingAnimeIsLoading);
  const error = useAppSelector(getTrendingAnimeError);

  useEffect(() => {
    dispatch(fetchTrendingAnime());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Trending Now</h2>
      <AnimeList
        items={data}
        cardVariant="compact"
        displayMode="flex"
        isLoading={isLoading}
      />
    </div>
  );
};
