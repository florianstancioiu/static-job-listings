import { useContext, createContext, useState } from "react";
import { type FilterBtnProps } from "../components/UI/FilterBtn/FilterBtn";

export type Filter = Omit<FilterBtnProps, "onRemove">;

export type FiltersState = {
  filters: Filter[];
  onAddFilter: (filter: Filter) => void;
  onRemoveFilter: (id: string) => void;
  onClear: () => void;
};

const FiltersContext = createContext<FiltersState>({
  filters: [],
  onAddFilter: () => {},
  onRemoveFilter: () => {},
  onClear: () => {},
});

export type FiltersContextProviderProps = {
  children: React.ReactNode;
};

export const FiltersContextProvider = ({
  children,
}: FiltersContextProviderProps) => {
  const [filters, setFilters] = useState<Filter[]>([]);

  const onAddFilter = (filter: Filter) => {
    if (filters.find((item) => item.title === filter.title)) {
      return;
    }

    setFilters((prevFilters) => [...prevFilters, filter]);
  };

  const onRemoveFilter = (id: string) => {
    setFilters(filters.filter((item) => item.id !== id));
  };

  const onClear = () => {
    setFilters([]);
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        onAddFilter,
        onRemoveFilter,
        onClear,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error(
      "useFiltersContext must be used within <FiltersContextProvider />",
    );
  }

  return context;
};
