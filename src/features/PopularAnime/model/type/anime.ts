import { Anime } from "@shared/api/type/type";

export interface PopularAnimeSchema {
    data? : Anime[],
    isLoading? : boolean,
    error?: string,
}