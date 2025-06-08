import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAnimeDetails } from "../services/fetchAnimeDetails";
import { AnimeDetailsSchema } from "../type/anime";
import { Anime } from "@shared/api/type/type";

const initialState: AnimeDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

const animeDetailsSlice = createSlice({
  name: "animeDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeDetails.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchAnimeDetails.fulfilled, (state, action: PayloadAction<Anime>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnimeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: animeDetailsActions } = animeDetailsSlice;
export const { reducer: animeDetailsReducer } = animeDetailsSlice;