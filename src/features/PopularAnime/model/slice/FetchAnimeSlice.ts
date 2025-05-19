import { createSlice } from "@reduxjs/toolkit";
import { PopularAnimeSchema } from "../type/anime";
import { fetchPopularAnime } from "../services/FetchPopularAnime";

const initialState: PopularAnimeSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const popularAnimeSlice = createSlice({
  name: "popularAnime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularAnime.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchPopularAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPopularAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: popularAnimeActions } = popularAnimeSlice;
export const { reducer: popularAnimeReducer } = popularAnimeSlice;
