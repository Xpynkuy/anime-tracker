// app/providers/StoreProvider/ui/DynamicModuleLoader.tsx
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'App/providers/StoreProvider/config/StateSchema';
import { ReduxStoreWithManager } from 'App/providers/StoreProvider/config/store';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children: React.ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  reducers,
  children,
  removeAfterUnmount = false,
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    console.log('🟢 DynamicModuleLoader MOUNTED');
    
    Object.entries(reducers).forEach(([key, reducer]) => {
      const mountedReducers = store.reducerManager.getReducerMap();
      if (!mountedReducers[key as StateSchemaKey]) {
        console.log(`🔄 Adding reducer: ${key}`);
        store.reducerManager.add(key as StateSchemaKey, reducer);
        store.dispatch({ type: `@INIT ${key} reducer` });
      } else {
        console.log(`⏩ Reducer ${key} already mounted`);
      }
    });

    return () => {
      if (removeAfterUnmount) {
        console.log('🔴 DynamicModuleLoader UNMOUNTING...');
        Object.keys(reducers).forEach((key) => {
          console.log(`🗑 Removing reducer: ${key}`);
          store.reducerManager.remove(key as StateSchemaKey);
          store.dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, [store, reducers, removeAfterUnmount]);

  return <>{children}</>;
};