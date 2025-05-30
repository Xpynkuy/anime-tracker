import { createSlice } from "@reduxjs/toolkit";
import { TrendingAnimeSchema } from "../type/anime";
import { fetchTrendingAnime } from "../services/FetchTrendingAnime";

const initialState: TrendingAnimeSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const trendingAnimeSlice = createSlice({
  name: "trendingAnime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingAnime.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchTrendingAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTrendingAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: trendingAnimeActions } = trendingAnimeSlice;
export const { reducer: trendingAnimeReducer } = trendingAnimeSlice;
