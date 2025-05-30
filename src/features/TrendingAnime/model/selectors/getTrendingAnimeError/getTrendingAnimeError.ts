import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getTrendingAnimeError = (state: StateSchema) => state?.trendingAnime.error || false;