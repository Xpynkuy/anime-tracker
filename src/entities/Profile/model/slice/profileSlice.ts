import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Profile, ProfileSchema } from "../type/profile";
import { fetchProfile } from "../services/FetchProfile";
import { updateProfileForm } from "../services/UpdateProfileForm";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly:(state, action: PayloadAction<boolean>) => {
        state.readonly = action.payload
    },
    updateProfile:(state, action: PayloadAction<Profile>) => {
        state.form = {
            ...state.form,
            ...action.payload
        }
    },
    onCancel:(state) => {
        state.readonly = true
        state.form = state.data
        state.validationErrors = undefined;
    },
  },
  extraReducers: (builder) => {
      builder
          .addCase(fetchProfile.pending, (state) => {
              state.error = undefined;
              state.isLoading = true;
          })
          .addCase(fetchProfile.fulfilled, (
              state,
              action: PayloadAction<Profile>,
          ) => {
              state.isLoading = false;
              state.data = action.payload;
              state.form = action.payload;
          })
          .addCase(fetchProfile.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
          })
           .addCase(updateProfileForm.pending, (state) => {
              state.validationErrors = undefined;
              state.isLoading = true;
          })
          .addCase(updateProfileForm.fulfilled, (
              state,
              action: PayloadAction<Profile>,
          ) => {
              state.isLoading = false;
              state.data = action.payload;
              state.form = action.payload;
              state.validationErrors = undefined;
          })
          .addCase(updateProfileForm.rejected, (state, action) => {
              state.isLoading = false;
              state.validationErrors = action.payload;
          });
  },
});


export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
