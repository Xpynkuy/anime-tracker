
import { StateSchema } from 'App/providers/StoreProvider/config/StateSchema';
import { AppDispatch } from 'App/providers/StoreProvider/config/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
