import Image from 'next/image';

interface Props {
  extraClasses?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<Props> = ({ extraClasses, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`place-items-center bg-[url(/assets/svgs/rounded-hollow-circle.svg)] bg-no-repeat bg-center w-[23px] h-[23px] hidden phones:grid ${extraClasses}`}>
      <Image src='/assets/svgs/vector-x.svg' alt='' width={11} height={11} priority />
    </button>
  );
};

export default CloseButton;
