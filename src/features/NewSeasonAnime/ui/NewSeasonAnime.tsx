import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { useEffect } from "react";
import AnimeList from "@entities/Anime/AnimeList/ui/AnimeList";
import { getNewSeasonAnimeData } from "../model/selectors/getNewSeasonAnimeData/getNewSeasonAnimeData";
import { getNewSeasonAnimeIsLoading } from "../model/selectors/getNewSeasonIsLoading/getNewSeasonAnimeIsLoading";
import { getNewSeasonAnimeError } from "../model/selectors/getNewSeasonError/getNewSeasonAnimeError";
import { fetchNewSeasonAnime } from "../model/services/FetchNewSeasonAnime";
import Loader from "@shared/ui/loader/Loader";
import styles from "./NewSeasonAnime.module.scss";

export const NewSeasonAnime = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(getNewSeasonAnimeData);
  const isLoading = useAppSelector(getNewSeasonAnimeIsLoading);
  const error = useAppSelector(getNewSeasonAnimeError);

  useEffect(() => {
    dispatch(fetchNewSeasonAnime());
  }, [dispatch]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Upcoming Season</h2>
      <AnimeList
        items={data}
        cardVariant="compact"
        displayMode="flex"
        isLoading={isLoading}
      />
    </div>
  );
};
