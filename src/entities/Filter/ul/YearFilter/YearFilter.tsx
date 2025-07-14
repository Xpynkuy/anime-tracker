// entities/Filter/ui/YearFilter/YearFilter.tsx
import { useCallback } from "react";
import { useAppSelector } from "@shared/ui/hooks/redux";
import Select from "@shared/ui/Select/Select";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

const yearOptions = [
  { value: "", label: "All years" },
  ...years.map((year) => ({ value: year.toString(), label: year.toString() })),
];

interface YearFilterProps {
  onChange: (value: number | undefined) => void;
}

export const YearFilter = ({ onChange }: YearFilterProps) => {
  const selectedYear = useAppSelector(
    (state) => state.catalogFilters?.seasonYear?.toString() || ""
  );

  const handleChange = useCallback(
    (value: string | string[]) => {
      if (typeof value === "string") {
        onChange(value ? parseInt(value, 10) : undefined);
      }
    },
    [onChange]
  );

  return (
    <div>
      <Select
        value={selectedYear}
        onChangeValue={handleChange}
        options={yearOptions}
        placeholder="Choose year..."
      />
    </div>
  );
};
