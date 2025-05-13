import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "App/providers/StoreProvider/config/StateSchema";
import { Profile } from "../type/profile";

export const fetchProfile = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfile", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Profile>("/profile");
    console.log("Fetched profile:", response.data); // Добавь это
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
