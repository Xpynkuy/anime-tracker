import { createSlice } from "@reduxjs/toolkit";
import { NewSeasonAnimeSchema } from "../type/anime";
import { fetchNewSeasonAnime } from "../services/FetchNewSeasonAnime";




const initialState: NewSeasonAnimeSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const newSeasonAnimeSlice = createSlice({
  name: "newSeasonAnime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewSeasonAnime.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchNewSeasonAnime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchNewSeasonAnime.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: newSeasonAnimeActions } = newSeasonAnimeSlice;
export const { reducer: newSeasonAnimeReducer } = newSeasonAnimeSlice;
