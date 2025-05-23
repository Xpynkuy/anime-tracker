import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "@entities/User";
import { USER_LOCALSTORAGE_KEY } from "@shared/const/localstorage";
import { ThunkConfig } from "App/providers/StoreProvider/config/StateSchema";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  "login/loginByUsername",
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>("/login", authData);

      if (!response.data) {
        throw new Error("No data");
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return rejectWithValue("Wrong username/password");
    }
  }
);
