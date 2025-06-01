import { createAsyncThunk } from "@reduxjs/toolkit";

import { Anime } from "@shared/api/type/type";
import { anilistApi } from "@shared/api/anilist";

const NewSeason_QUERY = `
query {
  Page(page: 1, perPage: 5) {
    media(sort: POPULARITY_DESC, type: ANIME, season: SUMMER, seasonYear: 2025) {
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

export const fetchNewSeasonAnime = createAsyncThunk<Anime[]>(
  "new/fetch",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await anilistApi.post("/", {
        query: NewSeason_QUERY,
      });

      return response.data.data.Page.media;
    } catch (error) {
      return rejectWithValue("Error");
    }
  }
);
