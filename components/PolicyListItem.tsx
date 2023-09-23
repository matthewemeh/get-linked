import Image from 'next/image';

interface Props {
  text: string;
  extraClasses?: string;
}

const PolicyListItem: React.FC<Props> = ({ text, extraClasses }) => {
  return (
    <li
      className={`first-letter:pl-3.5 phones:first-letter:pl-0 phones:flex phones:gap-x-3.5 phones:items-start ${extraClasses}`}>
      <Image
        alt=''
        priority
        width={17}
        height={17}
        src='/assets/svgs/check.svg'
        className='hidden phones:block'
      />
      {text}
    </li>
  );
};

export default PolicyListItem;
