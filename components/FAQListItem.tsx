interface Props {
  question: string;
}

const FAQListItem: React.FC<Props> = ({ question }) => {
  return (
    <li className='flex items-center justify-between pb-[13px] border-b border-heliotrope text-[14px] font-normal leading-7'>
      <p>{question}</p>
      <span className='text-[20px] text-heliotrope'>+</span>
    </li>
  );
};

export default FAQListItem;
