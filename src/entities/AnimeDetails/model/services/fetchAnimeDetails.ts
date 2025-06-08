import { createAsyncThunk } from "@reduxjs/toolkit";
import { Anime } from "@shared/api/type/type";
import { anilistApi } from "@shared/api/anilist";

const GET_ANIME_BY_ID_QUERY = `
query ($id: Int) {
  Media(id: $id, type: ANIME) {
    id
   title { romaji }
    coverImage { large }
    bannerImage
    averageScore
    seasonYear
    meanScore
    format
    genres
    description
    episodes
    duration
    status
  }
}
`;

export const fetchAnimeDetails = createAsyncThunk<Anime, number, { rejectValue: string }>(
  "animeDetails/fetch",
  async (id: number, thunkAPI) => {
    try {
      const response = await anilistApi.post<{ data: { Media: Anime } }>("/", {
        query: GET_ANIME_BY_ID_QUERY,
        variables: { id },
      });

      return response.data.data.Media;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch anime details");
    }
  }
);