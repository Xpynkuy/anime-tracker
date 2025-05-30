import { createAsyncThunk } from "@reduxjs/toolkit";

import { Anime } from "@shared/api/type/type";
import { anilistApi } from "@shared/api/anilist";

const TRENDING_QUERY = `
query {
  Page(page: 1, perPage: 1) {
    media(sort: TRENDING_DESC, type: ANIME) {
      id
      title { romaji }
      coverImage { large }
      bannerImage
      averageScore
      seasonYear
      meanScore
      format
      genres
    }
  }
}
`;

export const fetchTrendingAnime = createAsyncThunk<Anime[]>(
  "tranding/fetch",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await anilistApi.post("/", {
        query: TRENDING_QUERY,
      });

      return response.data.data.Page.media;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);
