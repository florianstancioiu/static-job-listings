export type PillProps = {
  children: React.ReactNode;
  bgColor?: "bg-green-400" | "bg-green-900";
};

const Pill = ({ children, bgColor = "bg-green-400" }: PillProps) => {
  const classes = `${bgColor} text-uppercase text-white h-6.5 rounded-[20px] inline-block px-3 leading-[28px] font-bold tracking-[-0.15px] uppercase xl:text-lg`;

  return <p className={classes}>{children}</p>;
};

export default Pill;
