import { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

import { AxiosInstance } from 'axios';
import { ProfileSchema } from '@entities/Profile';
import { PopularAnimeSchema } from '@features/PopularAnime';


export interface StateSchema {
  user: UserSchema;
  popularAnime: PopularAnimeSchema ;


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
