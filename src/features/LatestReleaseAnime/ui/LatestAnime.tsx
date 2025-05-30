import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { getLatestAnimeData } from "../model/selectors/getLatestAnimeData/getLatestAnimeData";
import { getLatestAnimeIsLoading } from "../model/selectors/getLatestAnimeIsLoading/getLatestAnimeIsLoading";
import { getLatestAnimeError } from "../model/selectors/getLatestAnimeError/getLatestAnimeError";
import { useEffect } from "react";

import AnimeList from "@entities/Anime/AnimeList/ui/AnimeList";
import { fetchLatestAnime } from "../model/services/FetchLatestAnime";
import styles from './LatestAnime.module.scss'

export const LatestAnime = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(getLatestAnimeData);
  const isLoading = useAppSelector(getLatestAnimeIsLoading);
  const error = useAppSelector(getLatestAnimeError);

  useEffect(() => {
    dispatch(fetchLatestAnime());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Latest Release</h2>
      <AnimeList items={data} />
    </div>
  );
};


