// entities/Filter/ui/FormatFilter/FormatFilter.tsx
import { useAppSelector } from "@shared/ui/hooks/redux";
import Select from "@shared/ui/Select/Select";

const formatOptions = [
  { value: "", label: "All format" },
  { value: "TV", label: "TV" },
  { value: "MOVIE", label: "Movie" },
  { value: "OVA", label: "OVA" },
  { value: "ONA", label: "ONA" },
  { value: "SPECIAL", label: "Special" },
];

interface FormatFilterProps {
  onChange: (value: string | string[]) => void;
}

export const FormatFilter = ({ onChange }: FormatFilterProps) => {
  const selectedFormat = useAppSelector(
    (state) => state.catalogFilters?.format || ""
  );

  return (
    <div>
      <Select
        value={selectedFormat}
        onChangeValue={onChange}
        options={formatOptions}
        placeholder="Choose a format..."
      />
    </div>
  );
};
