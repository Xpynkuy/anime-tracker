import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getNewSeasonAnimeIsLoading = (state: StateSchema) => state?.newSeasonAnime.isLoading || false;