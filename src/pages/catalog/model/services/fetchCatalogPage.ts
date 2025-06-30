import { createAsyncThunk } from "@reduxjs/toolkit";
import { anilistApi } from "@shared/api/anilist";
import { Anime } from "@shared/api/type/type";

const CATALOG_QUERY = `
query ($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      hasNextPage   
    }
    media(sort: POPULARITY_DESC, type: ANIME) {
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

interface CatalogResponse {
  data: Anime[];
  hasNextPage: boolean;
}

export const fetchCatalogPage = createAsyncThunk<CatalogResponse, number>(
  "catalog/fetchCatalogPage",
  async (page, thunkAPI) => {
    const PER_PAGE = 3;
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await anilistApi.post("/", {
        query: CATALOG_QUERY,
        variables: { page, perPage: PER_PAGE },
      });

      return {
        data: response.data.data.Page.media,
        hasNextPage: response.data.data.Page.pageInfo.hasNextPage,
      };
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);
