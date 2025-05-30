import { createSlice } from "@reduxjs/toolkit";
import { LatestAnimeSchema } from "../type/anime";
import { fetchLatestAnime } from "../services/FetchLatestAnime";




const initialState: LatestAnimeSchema  = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const latestAnimeSlice = createSlice({
  name: "latestAnime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestAnime.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchLatestAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchLatestAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: latestAnimeActions } = latestAnimeSlice;
export const { reducer: latestAnimeReducer } = latestAnimeSlice;
