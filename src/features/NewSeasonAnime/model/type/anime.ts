import { Anime } from "@shared/api/type/type";

export interface NewSeasonAnimeSchema {
    data? : Anime[],
    isLoading? : boolean,
    error?: string,
}