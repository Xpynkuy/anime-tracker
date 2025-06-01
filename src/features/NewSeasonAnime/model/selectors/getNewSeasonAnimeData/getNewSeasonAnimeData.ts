import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";


export const getNewSeasonAnimeData = (state: StateSchema) => state?.newSeasonAnime.data || [];