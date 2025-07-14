// entities/Filter/ui/CatalogFilters/CatalogFilters.tsx
import { memo, useCallback } from "react";
import { FormatFilter } from "../FormatFilter/FormatFilter";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { catalogFiltersActions } from "../../model/slice/CatalogFilterSlice";
import { YearFilter } from "../YearFilter/YearFilter";

import styles from "./FilterComponent.module.scss";
import { GenreFilter } from "../GenreFilter/GenreFilter";

interface CatalogFiltersProps {
  onChange: () => void;
}

export const FilterComponent = memo(({ onChange }: CatalogFiltersProps) => {
  const dispatch = useAppDispatch();

  const handleFormatChange = useCallback(
    (value: string | string[]) => {
      if (typeof value === "string") {
        dispatch(catalogFiltersActions.setFormatFilter(value || undefined));
        onChange();
      }
    },
    [dispatch, onChange]
  );

  const handleYearChange = useCallback(
    (value: number | undefined) => {
      dispatch(catalogFiltersActions.setYearFilter(value));
      onChange();
    },
    [dispatch, onChange]
  );

  const handleGenreChange = useCallback(
    (value: string[]) => {
      dispatch(catalogFiltersActions.setGenreFilter(value));
      onChange();
    },
    [dispatch, onChange]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Filter</h2>
      <div className={styles.filterGroup}>
        <FormatFilter onChange={handleFormatChange} />
        <GenreFilter onChange={handleGenreChange} />
        <YearFilter onChange={handleYearChange} />
      </div>

      {/* <div className={styles.actions}>
        <button 
          className={styles.resetButton}
          onClick={() => {
            dispatch(catalogFiltersActions.resetFilters());
            onChange();
          }}
        >
          Сбросить фильтры
        </button>
      </div> */}
    </div>
  );
});
