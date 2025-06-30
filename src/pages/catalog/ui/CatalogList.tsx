import { useAppSelector } from "@shared/ui/hooks/redux";
import { useInfiniteScroll } from "@shared/ui/hooks/useInfiniteScroll";
import { CatalogCard } from "./CatalogCard";
import styles from './CatalogList.module.scss'

const CatalogList = () => {
  const { data, isLoading, error, hasNextPage } = useAppSelector(
    (state) => state.catalog
  );
  const observerRef = useInfiniteScroll();

  if (error) {
    return (
        <div>Smth wrong</div>
    )
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

          {/* Элемент для отслеживания скролла */}
          <div ref={observerRef} className="h-1" />

          {isLoading && <div>loading</div>}

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
