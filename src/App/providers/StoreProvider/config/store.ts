import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@features/counter/counterSlice';
import userReducer from '@entities/User/model/slice/userSlice'
import loginReducer from '@features/AuthByUsername/model/slice/AuthByUsernameSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
