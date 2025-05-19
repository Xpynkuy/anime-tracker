export interface Anime {
    id?: number;
  title?: {
    romaji?: string;
    english?: string;
    native?: string;
  };
  bannerImage?: string;
  coverImage?: {
    large?: string;
    medium?: string;
    color?: string;
  };
  averageScore?: number;  
  meanScore?: number;     // Для популярных
  episodes?: number;           // Для детальной информации
  genres?: string[];           // Общие теги
  nextAiringEpisode?: {        // Для новых релизов
    episode?: number;
    timeUntilAiring?: number;
  };
  seasonYear?: number;         // Для общего каталога
  status?: 'RELEASING' | 'FINISHED' | 'NOT_YET_RELEASED';
  description?: string;        // Для детальных карточек
  format?: 'TV' | 'MOVIE' | 'OVA';
}