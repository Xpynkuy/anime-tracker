import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getLatestAnimeIsLoading = (state: StateSchema) => state?.latestAnime.isLoading || false;