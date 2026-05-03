export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  const onButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={onButtonClick}
      className="px-4 py-2 bg-green-50 rounded cursor-pointer text-base font-bold leading-[150%] tracking-[-0.15px] text-green-400 hover:bg-green-400 hover:text-white"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
