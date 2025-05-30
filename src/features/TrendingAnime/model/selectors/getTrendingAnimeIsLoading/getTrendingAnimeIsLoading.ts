import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getTrendingAnimeIsLoading = (state: StateSchema) => state?.trendingAnime.isLoading || false;