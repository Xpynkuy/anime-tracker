import { Anime } from "@shared/api/type/type";

export interface LatestAnimeSchema {
    data? : Anime[],
    isLoading? : boolean,
    error?: string,
}