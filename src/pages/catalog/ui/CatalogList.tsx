import { useAppSelector } from "@shared/ui/hooks/redux";
import { useInfiniteScroll } from "@shared/ui/hooks/useInfiniteScroll";
import { CatalogCard } from "./CatalogCard";
import styles from "./CatalogList.module.scss";
import Loader from "@shared/ui/loader/Loader";
import { catalogInitialState } from "../model/slice/CatalogSlice";

const CatalogList = () => {
   const catalogState = useAppSelector((state) => state.catalog ?? catalogInitialState);
  
  // Деструктурируем из гарантированно существующего объекта
  const { data, isLoading, error, hasNextPage } = catalogState;

  const observerRef = useInfiniteScroll();

  if (error) {
    return <div>Smth wrong</div>;
  }

  return (
    <div>
      {data.length === 0 && !isLoading ? (
        <div className="text-center py-8">No anime found</div>
      ) : (
        <>
          <div className={styles.list}>
            {data.map((item, index) => (
              <CatalogCard key={index} item={item} />
            ))}
          </div>
          {isLoading && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          <div ref={observerRef} className="h-1" />

          {!hasNextPage && data.length > 0 && (
            <div className="text-center py-4 text-gray-500">
              All anime loaded
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CatalogList;
