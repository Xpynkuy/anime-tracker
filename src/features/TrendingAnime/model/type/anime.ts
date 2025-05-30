import { Anime } from "@shared/api/type/type";

export interface TrendingAnimeSchema {
    data? : Anime[],
    isLoading? : boolean,
    error?: string,
}