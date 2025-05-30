import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLatestAnimeError = (state: StateSchema) => state?.latestAnime.error || false;