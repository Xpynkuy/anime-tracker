import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from '@entities/User/index'; 
import { loginReducer } from '@features/AuthByUsername';


export const store = configureStore({
  reducer: {
    user: userReducer, 
    login: loginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;