import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export const getAnimeData = (state: StateSchema) => state.animeDetails?.data || undefined;
export const getAnimeDetailsIsLoading = (state: StateSchema) =>
  state.animeDetails?.isLoading || false;
export const getAnimeDetailsError = (state: StateSchema) =>
  state.animeDetails?.error || "";
