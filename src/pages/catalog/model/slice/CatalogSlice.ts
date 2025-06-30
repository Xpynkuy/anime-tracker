import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCatalogPage } from "../services/fetchCatalogPage";
import { CatalogPageSchema } from "../type/catalogPageSchema";
import { Anime } from "@shared/api/type/type";

const initialState: CatalogPageSchema = {
  data: [],
  isLoading: false,
  error: undefined,
  currentPage: 1,
  hasNextPage: false,
};

export const CatalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogPage.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCatalogPage.fulfilled,
        (
          state,
          action: PayloadAction<{ data: Anime[]; hasNextPage: boolean }>
        ) => {
          state.isLoading = false;
          state.data = [...state.data, ...action.payload.data];
          state.currentPage += 1;
          state.hasNextPage = action.payload.hasNextPage;
        }
      )
      .addCase(fetchCatalogPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: catalogActions } = CatalogSlice;
export const { reducer: catalogReducer } = CatalogSlice;
