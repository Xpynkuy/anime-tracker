import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '@entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema, ReducerManager } from './StateSchema';
import { $api } from '@shared/api/api';
import { popularAnimeReducer } from '@features/PopularAnime';

// Шаг 1: Определяем тип ReduxStoreWithManager ДО использования
export interface ReduxStoreWithManager extends ReturnType<typeof configureStore> {
  reducerManager: ReducerManager;
}

// Шаг 2: Определяем редьюсеры
const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  popularAnime: popularAnimeReducer
};

// Шаг 3: Создаем менеджер редьюсеров
const reducerManager = createReducerManager(rootReducers);

// Шаг 4: Создаем сам store
const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
});

// Шаг 5: Расширяем store полем reducerManager
(store as ReduxStoreWithManager).reducerManager = reducerManager;

// Шаг 6: Экспорт типов и самого стора
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
