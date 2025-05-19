import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getPopularAnimeError = (state: StateSchema) => state?.popularAnime.error || false;