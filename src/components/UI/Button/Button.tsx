export type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-green-50 rounded cursor-pointer text-base font-bold leading-[150%] tracking-[-0.15px] text-green-400"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
