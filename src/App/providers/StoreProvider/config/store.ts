import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '@entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema, ReducerManager } from './StateSchema';

export interface ReduxStoreWithManager extends ReturnType<typeof configureStore> {
  reducerManager: ReducerManager;
}

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
};

const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
  reducer: reducerManager.reduce,
}) as ReduxStoreWithManager;

store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
