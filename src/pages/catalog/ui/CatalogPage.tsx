import { memo, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import { fetchCatalogPage } from "../model/services/fetchCatalogPage";
import styles from "./CatalogPage.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader";
import { catalogReducer, catalogActions } from "../model/slice/CatalogSlice";
import {
  catalogFiltersReducer,
  catalogFiltersInitialState,
} from "@entities/Filter/model/slice/CatalogFilterSlice";
import CatalogList from "./CatalogList";
import { FormatFilter } from "@entities/Filter/ul/FormatFilter/FormatFilter";
import { YearFilter } from "@entities/Filter/ul/YearFilter/YearFilter";
import { FilterComponent } from "@entities/Filter/ul/FilterComponent/FilterComponent";

const initialReducers: ReducersList = {
  catalog: catalogReducer,
  catalogFilters: catalogFiltersReducer,
};

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(
    (state) => state.catalogFilters ?? catalogFiltersInitialState
  );

  useEffect(() => {
    dispatch(catalogActions.resetData());
    dispatch(
      fetchCatalogPage({
        page: 1,
        format: filters.format,
        seasonYear: filters.seasonYear,
        genre_in: filters.genres,
      })
    );
  }, [
    dispatch,
    filters.format,
    filters.seasonYear,
    JSON.stringify(filters.genres),
  ]);

  const handleFilterChange = useCallback(() => {
    dispatch(catalogActions.resetData());
    dispatch(
      fetchCatalogPage({
        page: 1,
        format: filters.format,
        seasonYear: filters.seasonYear,
        genre_in: filters.genres,
      })
    );
  }, [dispatch, filters]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <FilterComponent onChange={handleFilterChange}/>
        </div>
        <div className={styles.contentRight}>
          <CatalogList />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(CatalogPage);
