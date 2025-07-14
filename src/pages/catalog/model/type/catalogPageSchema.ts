import { Anime } from "@shared/api/type/type";

export interface CatalogPageSchema {
  data: Anime[];
  isLoading?: boolean;
  error?: string | null;
  currentPage: number;
  hasNextPage: boolean;
}
