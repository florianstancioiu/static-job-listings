export type FilterBtnProps = {
  id: string;
  title: string;
  type: "lang" | "role" | "tool" | "level";
  onRemove: (id: string) => void;
};

const FilterBtn = ({ id, title, onRemove }: FilterBtnProps) => {
  return (
    <button
      type="button"
      className="rounded flex group"
      onClick={() => onRemove(id)}
    >
      <div className="px-4 py-2 bg-green-50 cursor-pointer text-base font-bold leading-[150%] tracking-[-0.15px] text-green-400">
        {title}
      </div>
      <div className="size-8 grid place-content-center uppercase font-bold text-white bg-green-400 rounded-tr rounded-br cursor-pointer group-hover:bg-green-900">
        <img src="./images/icon-remove.svg" alt="" />
      </div>
    </button>
  );
};

export default FilterBtn;
