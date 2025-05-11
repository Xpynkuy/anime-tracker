import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
  } from '@reduxjs/toolkit';
  import {
    StateSchema,
    StateSchemaKey,
    ReducerManager,
  } from './StateSchema';
  
  export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
  ): ReducerManager {
    const reducers: ReducersMapObject<StateSchema> = { ...initialReducers };
  
    // Типизируем комбинированный редьюсер явно
    let combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
  
    let keysToRemove: StateSchemaKey[] = [];
  
    return {
      getReducerMap: () => reducers,
  
      reduce: (state: StateSchema | undefined, action: AnyAction): StateSchema => {
        if (keysToRemove.length > 0 && state) {
          state = { ...state };
  
          for (const key of keysToRemove) {
            delete state[key];
          }
  
          keysToRemove = [];
        }
  
        return combinedReducer(state, action);
      },
  
      add: (key: StateSchemaKey, reducer: Reducer): void => {
        if (!key || reducers[key]) return;
  
        reducers[key] = reducer;
        combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
      },
  
      remove: (key: StateSchemaKey): void => {
        if (!key || !reducers[key]) return;
  
        delete reducers[key];
        keysToRemove.push(key);
        combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
      },
    };
  }
  