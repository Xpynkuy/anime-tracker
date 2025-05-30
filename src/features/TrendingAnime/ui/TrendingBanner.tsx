import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import styles from "./TrendingBanner.module.scss";
import { getTrendingAnimeData } from "../model/selectors/getTrendingAnimeData/getTrendingAnimeData";
import { getTrendingAnimeIsLoading } from "../model/selectors/getTrendingAnimeIsLoading/getTrendingAnimeIsLoading";
import { getTrendingAnimeError } from "../model/selectors/getTrendingAnimeError/getTrendingAnimeError";
import { useEffect } from "react";
import { fetchTrendingAnime } from "../model/services/FetchTrendingAnime";
import AnimeList from "@entities/Anime/AnimeList/ui/AnimeList";

export const TrendingBanner = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(getTrendingAnimeData);
  const isLoading = useAppSelector(getTrendingAnimeIsLoading);
  const error = useAppSelector(getTrendingAnimeError);

  useEffect(() => {
    dispatch(fetchTrendingAnime());
  }, []);

  return <div className={styles.wrapper}>
    <AnimeList items={data} cardVariant="banner"/>
  </div>;
};
