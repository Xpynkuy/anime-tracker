import { memo, useEffect } from "react";
import CatalogList from "./CatalogList";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { fetchCatalogPage } from "../model/services/fetchCatalogPage";
import styles from "./CatalogPage.module.scss";
import { DynamicModuleLoader, ReducersList } from "@shared/lib/components/DynamicModuleLoader";
import { catalogReducer } from "../model/slice/CatalogSlice";

const initialReducer:ReducersList = {
  catalog: catalogReducer,
};
const CatalogPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCatalogPage(1));
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount={true}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>FILTER</div>
        <div className={styles.contentRight}>
          <CatalogList />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(CatalogPage);
