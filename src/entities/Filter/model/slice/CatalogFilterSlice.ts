import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatalogFiltersSchema } from "../types/Filter";

export const catalogFiltersInitialState: CatalogFiltersSchema = {
  genres: [],
  seasonYear: undefined,
  format: undefined,
};

export const catalogFiltersSlice = createSlice({
  name: "catalogFilters",
  initialState: catalogFiltersInitialState,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<number | undefined>) => {
      state.seasonYear = action.payload;
    },
    setFormatFilter: (state, action: PayloadAction<string | undefined>) => {
      state.format = action.payload;
    },
    resetFilters: () => catalogFiltersInitialState,
  },
});

export const { actions: catalogFiltersActions } = catalogFiltersSlice;
export const { reducer: catalogFiltersReducer } = catalogFiltersSlice;