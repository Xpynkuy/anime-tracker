import { Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';



export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: Reducer<StateSchema>;
  add: (key: keyof StateSchema, reducer: Reducer) => void;
  remove: (key: keyof StateSchema) => void;
}
