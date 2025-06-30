import { AnyAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

import { AxiosInstance } from "axios";
import { ProfileSchema } from "@entities/Profile";
import { PopularAnimeSchema } from "@features/PopularAnime";
import { LatestAnimeSchema } from "@features/LatestReleaseAnime";
import { TrendingAnimeSchema } from "@features/TrendingAnime";
import { NewSeasonAnimeSchema } from "@features/NewSeasonAnime";
import { AnimeDetailsSchema } from "@entities/AnimeDetails";
import { CatalogPageSchema } from "@pages/catalog";



export interface StateSchema {
  user: UserSchema;
  popularAnime: PopularAnimeSchema;
  latestAnime: LatestAnimeSchema;
  trendingAnime: TrendingAnimeSchema;
  newSeasonAnime: NewSeasonAnimeSchema;
  catalog: CatalogPageSchema;

  animeDetails?: AnimeDetailsSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: AnyAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
