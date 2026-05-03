export type FilterBtnProps = {
  id: string;
  title: string;
  type: "lang" | "role" | "tool" | "level";
  onRemove: (id: string) => void;
};

const FilterBtn = ({ id, title, onRemove }: FilterBtnProps) => {
  return (
    <div className="rounded flex group" onClick={() => onRemove(id)}>
      <button
        type="button"
        className="px-4 py-2 bg-green-50 cursor-pointer text-base font-bold leading-[150%] tracking-[-0.15px] text-green-400"
      >
        {title}
      </button>
      <p className="w-8 h-8 grid place-content-center uppercase font-bold text-white bg-green-400 rounded-tr rounded-br cursor-pointer group-hover:bg-green-900">
        x
      </p>
    </div>
  );
};

export default FilterBtn;
