interface Props {
  visible?: boolean;
  extraClasses?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay: React.FC<Props> = ({ extraClasses, onClick, visible }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] duration-400 ${
        visible || 'opacity-0 invisible'
      } ${extraClasses}`}
    />
  );
};
export default Overlay;
