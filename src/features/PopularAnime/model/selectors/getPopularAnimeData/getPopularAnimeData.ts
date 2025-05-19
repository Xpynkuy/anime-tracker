import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getPopularAnimeData = (state: StateSchema) => state?.popularAnime.data || [];