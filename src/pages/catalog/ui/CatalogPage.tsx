import { memo, useEffect } from "react";
import CatalogList from "./CatalogList";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { fetchCatalogPage } from "../model/services/fetchCatalogPage";
import styles from "./CatalogPage.module.scss";
const CatalogPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCatalogPage(1));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        FILTER
      </div>
      <div className={styles.contentRight}>
        <CatalogList />
      </div>
    </div>
  );
};

export default memo(CatalogPage);
