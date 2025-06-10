import {
  getAnimeData,
  getAnimeDetailsError,
  getAnimeDetailsIsLoading,
} from "@entities/AnimeDetails/model/selectors/getAnimeDetails";
import { fetchAnimeDetails } from "@entities/AnimeDetails/model/services/fetchAnimeDetails";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeDetailHeaderBlock from "../AnimeDetailsHeaderBlock/AnimeDetailHeaderBlock";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader";
import { animeDetailsReducer } from "@entities/AnimeDetails/model/slice/AnimeDetailsSlice";
import Loader from "@shared/ui/loader/Loader";
import AnimeDetailTabs from "../AnimeDetailTabs/AnimeDetailTabs";

const initialReducers: ReducersList = {
  animeDetails: animeDetailsReducer,
};

export const AnimeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const data = useAppSelector(getAnimeData);
  const isLoading = useAppSelector(getAnimeDetailsIsLoading);
  const error = useAppSelector(getAnimeDetailsError);

  useEffect(() => {
    dispatch(fetchAnimeDetails(Number(id)));
  }, [dispatch, id]);

  // let content =<AnimeDetailHeaderBlock anime={data!} />;
  let content = <AnimeDetailTabs anime={data!} />;



  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      {content}
    </DynamicModuleLoader>
  );
};
