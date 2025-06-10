import { createAsyncThunk } from "@reduxjs/toolkit";

import { Anime } from "@shared/api/type/type";
import { anilistApi } from "@shared/api/anilist";

const POPULAR_QUERY = `
query {
  Page(page: 1, perPage: 12) {
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
    }
  }
}
`;

export const fetchPopularAnime = createAsyncThunk<Anime[]>(
  "popular/fetch",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await anilistApi.post("/", {
        query: POPULAR_QUERY,
      });

      return response.data.data.Page.media;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);
