import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { useEffect } from "react";
import { fetchPopularAnime } from "../model/services/FetchPopularAnime";
import { getPopularAnimeData } from "../model/selectors/getPopularAnimeData/getPopularAnimeData";

import { getPopularAnimeIsLoading } from "../model/selectors/getPopularAnimeIsLoading/getPopularAnimeIsLoading";
import { getPopularAnimeError } from "../model/selectors/getPopularAnimeError/getPopularAnimeError";
import Loader from "@shared/ui/loader/Loader";
import AnimeList from "@entities/Anime/AnimeList/ui/AnimeList";
import styles from "./PopularAnime.module.scss";

export const PopularAnime = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(getPopularAnimeData);
  const isLoading = useAppSelector(getPopularAnimeIsLoading);
  const error = useAppSelector(getPopularAnimeError);

  useEffect(() => {
    dispatch(fetchPopularAnime());
  }, [dispatch]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>All time popular</h2>
      <AnimeList items={data} displayMode="carousel" isLoading={isLoading} />
    </div>
  );
};
