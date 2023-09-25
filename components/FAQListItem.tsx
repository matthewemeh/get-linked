import { useState } from 'react';

interface Props {
  answer: string;
  question: string;
}

const FAQListItem: React.FC<Props> = ({ answer, question }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div
      onClick={() => setOpened(!opened)}
      className='anime anime-left text-[14px] font-normal leading-7 phones:text-[12px] phones:leading-[18px] phones:text-left'>
      <div className='cursor-pointer flex items-center justify-between pb-[13px] border-b border-heliotrope'>
        <p>{question}</p>
        <span
          className={`text-[20px] text-heliotrope ${
            opened ? 'animate-rotate' : 'animate-reverse-rotate'
          }`}>
          +
        </span>
      </div>

      <p
        className={`min-h-fit mt-2 duration-400 ${
          opened ? 'h-[56px] opacity-100' : 'h-0 opacity-0'
        }`}>
        {answer}
      </p>
    </div>
  );
};

export default FAQListItem;
