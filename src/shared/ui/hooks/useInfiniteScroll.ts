import { useRef, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { fetchCatalogPage } from "@pages/catalog/model/services/fetchCatalogPage";

export const useInfiniteScroll = () => { 
    const dispatch = useAppDispatch();
    const { currentPage, hasNextPage, isLoading } = useAppSelector((state) => state.catalog);
    const observerRef = useRef<HTMLDivElement>(null);
    const observerInstance = useRef<IntersectionObserver | null>(null);

    const loadNextPage = useCallback(() => {
        if (hasNextPage && !isLoading) {
            dispatch(fetchCatalogPage(currentPage));
        }
    }, [dispatch, hasNextPage, isLoading, currentPage]);

    // Загрузка первой страницы при монтировании
    useEffect(() => {
        // Загружаем только если это первая страница и данных нет
        if (currentPage === 1 && !isLoading && hasNextPage) {
            dispatch(fetchCatalogPage(1));
        }
    }, [dispatch, currentPage, isLoading, hasNextPage]);

    // Настройка Intersection Observer
    useEffect(() => {
        if (!observerRef.current) return;

        // Очищаем предыдущий observer
        if (observerInstance.current) {
            observerInstance.current.disconnect();
        }

        observerInstance.current = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && hasNextPage && !isLoading) {
                    loadNextPage();
                }
            },
            {
                root: null,
                rootMargin: "0px", // Загружаем заранее
                threshold: 1,
            }
        );

        const currentElement = observerRef.current;
        observerInstance.current.observe(currentElement);

        return () => {
            if (observerInstance.current) {
                observerInstance.current.disconnect();
            }
        };
    }, [loadNextPage, hasNextPage, isLoading]);

    return observerRef;
};