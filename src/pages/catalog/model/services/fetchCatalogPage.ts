import { createAsyncThunk } from "@reduxjs/toolkit";
import { anilistApi } from "@shared/api/anilist";
import { Anime } from "@shared/api/type/type";

const CATALOG_QUERY = `
query ($page: Int, $perPage: Int, $format: MediaFormat, $seasonYear: Int, $genre_in: [String]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      hasNextPage
    }
    media(
      sort: POPULARITY_DESC,
      type: ANIME,
      format: $format,
      seasonYear: $seasonYear,
      genre_in: $genre_in
    ) {
      id
      title { romaji }
      coverImage { large }
      bannerImage
      averageScore
      seasonYear
      meanScore
      format
      genres
      duration
      description
    }
  }
}
`;

interface FetchCatalogArgs {
  page: number;
  format?: string;
  seasonYear?: number;
  genre_in?: string[];
}

interface CatalogResponse {
  data: Anime[];
  hasNextPage: boolean;
}

export const fetchCatalogPage = createAsyncThunk<CatalogResponse, FetchCatalogArgs>(
  "catalog/fetchCatalogPage",
  async ({ page, format, seasonYear, genre_in }, thunkAPI) => {
    const PER_PAGE = 3; 
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const response = await anilistApi.post("/", {
        query: CATALOG_QUERY,
        variables: {
          page,
          perPage: PER_PAGE,
          format: format || undefined,
          seasonYear: seasonYear || undefined,
          genre_in: genre_in?.length ? genre_in : undefined,
        },
      }, { signal });

      // Проверка на пустой ответ
      if (!response.data?.data?.Page?.media) {
        return {
          data: [],
          hasNextPage: false
        };
      }

      return {
        data: response.data.data.Page.media,
        hasNextPage: response.data.data.Page.pageInfo.hasNextPage,
      };
    } catch (error) {
      if (error === 'AbortError') {
        return thunkAPI.rejectWithValue('Aborted');
      }
      
      // Логирование ошибки для отладки
      console.error("API Error:", error);
      return rejectWithValue("API Error");
    }
  }
);