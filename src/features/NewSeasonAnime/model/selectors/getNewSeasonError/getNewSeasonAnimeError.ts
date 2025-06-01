import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getNewSeasonAnimeError = (state: StateSchema) => state?.newSeasonAnime.error || false;