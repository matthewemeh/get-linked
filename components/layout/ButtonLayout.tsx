interface Props {
  isActive?: boolean;
  extraClasses?: string;
  children: React.ReactNode;
}

const ButtonLayout: React.FC<Props> = ({ children, extraClasses, isActive }) => {
  return (
    <div
      className={`w-[172px] h-[53px] bg-[linear-gradient(270deg,#903aff_0%,#ff26b9_99.9%,#fe34b9_100%)] text-[16px] font-normal grid place-items-center rounded duration-500 phones:text-[14px] phones:w-[152px] phones:h-[46.84px] ${
        isActive ? 'p-0.5' : 'p-0'
      } ${extraClasses}`}>
      {children}
    </div>
  );
};

export default ButtonLayout;
