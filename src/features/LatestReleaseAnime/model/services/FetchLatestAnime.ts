import { createAsyncThunk } from "@reduxjs/toolkit";

import { Anime } from "@shared/api/type/type";
import { anilistApi } from "@shared/api/anilist";

const LATEST_RELEASE_QUERY = `
query {
  Page(page: 1, perPage: 12) {
    media(sort: START_DATE_DESC, type: ANIME, status_in: [RELEASING]) {
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

export const fetchLatestAnime = createAsyncThunk<Anime[]>(
  "latest/fetch",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await anilistApi.post("/", {
        query: LATEST_RELEASE_QUERY,
      });

      return response.data.data.Page.media;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);
