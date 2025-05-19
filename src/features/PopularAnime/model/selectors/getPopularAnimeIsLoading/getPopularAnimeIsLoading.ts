import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getPopularAnimeIsLoading = (state: StateSchema) => state?.popularAnime.isLoading || false;