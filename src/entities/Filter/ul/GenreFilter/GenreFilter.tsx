import { catalogFiltersActions } from "@entities/Filter/model/slice/CatalogFilterSlice";
import { useAppDispatch, useAppSelector } from "@shared/ui/hooks/redux";
import Select from "@shared/ui/Select/Select";

const genreOptions = [
  { value: "Action", label: "Action" },
  { value: "Comedy", label: "Comedy" },
  { value: "Drama", label: "Drama" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Sci-Fi", label: "Sci-Fi" },
  { value: "Romance", label: "Romance" },
  { value: "Slice of Life", label: "Slice of Life" },
  { value: "Adventure", label: "Adventure" },
  { value: "Mystery", label: "Mystery" },
  { value: "Horror", label: "Horror" },
  { value: "Supernatural", label: "Supernatural" },
  { value: "Sports", label: "Sport" },
  { value: "Mecha", label: "Mecha" },
];

interface GenreFilterProps {
  onChange: (values: string[]) => void;
}

export const GenreFilter = ({ onChange }: GenreFilterProps) => {
  const dispatch = useAppDispatch();
  const selectedGenres = useAppSelector(
    (state) => state.catalogFilters?.genres || []
  );

  const handleChange = (values: string | string[]) => {
    if (Array.isArray(values)) {
      dispatch(catalogFiltersActions.setGenreFilter(values));
      onChange(values);
    }
  };

  return (
    <div>
      <Select
        value={selectedGenres}
        onChangeValue={handleChange}
        options={genreOptions}
        placeholder="All genres"
      />
    </div>
  );
};
