import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalogPage } from "../services/fetchCatalogPage";
import { CatalogPageSchema } from "../type/catalogPageSchema";

export const catalogInitialState: CatalogPageSchema = {
  data: [],
  isLoading: false,
  error: undefined,
  currentPage: 1,
  hasNextPage: false,
};

export const CatalogSlice = createSlice({
  name: "catalog",
  initialState: catalogInitialState, 
  reducers: {
    resetData: (state) => {
      state.data = [];
      state.currentPage = 1;
      state.hasNextPage = false;
    },
    resetPage: (state) => {
      state.currentPage = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogPage.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCatalogPage.fulfilled, (state, action) => {
        state.isLoading = false;
        
        // Если это первая страница - заменяем данные
        if (action.meta.arg.page === 1) {
          state.data = action.payload.data;
        } else {
          // Иначе добавляем к существующим
          state.data = [...state.data, ...action.payload.data];
        }
        
        state.currentPage = action.meta.arg.page;
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(fetchCatalogPage.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload !== 'Aborted') {
          state.error = action.payload as string;
        }
      });
  },
});

export const { actions: catalogActions } = CatalogSlice;
export const { reducer: catalogReducer } = CatalogSlice;