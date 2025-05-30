import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLatestAnimeData = (state: StateSchema) => state?.latestAnime.data || [];