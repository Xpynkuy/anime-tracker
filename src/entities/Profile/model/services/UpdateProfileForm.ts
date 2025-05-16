import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "App/providers/StoreProvider/config/StateSchema";
import { Profile, ValidateProfileError } from "../type/profile";
import { getProfileForm } from "../selectors/getProfileForm/getProfileForm";
import { ValidateProfile } from "./ValidateProfile";

export const updateProfileForm = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileForm", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState())

  const errors = ValidateProfile(formData)

  if (errors.length > 0) {
    return rejectWithValue(errors)
  }

  try {
    const response = await extra.api.put<Profile>("/profile", formData);
    console.log("Fetched profile:", response.data); 

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
