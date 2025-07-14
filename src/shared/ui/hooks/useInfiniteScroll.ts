import { useRef, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchCatalogPage } from "@pages/catalog/model/services/fetchCatalogPage";
import { catalogFiltersInitialState } from "@entities/Filter/model/slice/CatalogFilterSlice";
import { catalogInitialState } from "@pages/catalog/model/slice/CatalogSlice"; // Добавьте импорт

export const useInfiniteScroll = () => {
  const dispatch = useAppDispatch();
  
  // Используем запасное значение для catalog
  const catalogState = useAppSelector((state) => state.catalog ?? catalogInitialState);
  
  // Деструктурируем из гарантированно существующего объекта
  const { currentPage, hasNextPage, isLoading } = catalogState;
  
  // Используем значение по умолчанию для фильтров
  const filters = useAppSelector((state) => state.catalogFilters ?? catalogFiltersInitialState);

  const observerRef = useRef<HTMLDivElement>(null);

  const loadNextPage = () => {
    if (hasNextPage && !isLoading) {
      dispatch(fetchCatalogPage({
        page: currentPage + 1,
        format: filters.format,
        seasonYear: filters.seasonYear,
        genre_in: filters.genres,
      }));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loadNextPage]);

  return observerRef;
};