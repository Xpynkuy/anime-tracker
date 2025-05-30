import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getTrendingAnimeData = (state: StateSchema) => state?.trendingAnime.data || [];