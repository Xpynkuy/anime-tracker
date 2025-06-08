import { Anime } from "@shared/api/type/type";

export interface AnimeDetailsSchema {
    data? : Anime,
    isLoading? : boolean,
    error?: string,
}