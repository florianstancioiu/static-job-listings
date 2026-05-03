import FilterBtn from "../UI/FilterBtn/FilterBtn";
import { useFiltersContext } from "../../store/FiltersContext";

const Filters = () => {
  const { filters, onRemoveFilter, onClear } = useFiltersContext();

  return (
    <>
      {filters.length > 0 && (
        <section className="py-4 px-6 bg-white rounded-[5px] flex justify-between -mt-23 w-full mb-12 drop-shadow-lg/15 drop-shadow-green-600">
          <div className="flex gap-4 flex-wrap">
            {filters.map((filter) => (
              <FilterBtn
                key={filter.id}
                id={filter.id}
                title={filter.title}
                type={filter.type}
                onRemove={(id) => onRemoveFilter(id)}
              />
            ))}
          </div>
          <div className="grid place-content-center">
            <button
              onClick={() => onClear()}
              type="button"
              className="text-green-400 font-bold cursor-pointer"
            >
              Clear
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Filters;
