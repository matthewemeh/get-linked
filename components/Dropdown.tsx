import Image from 'next/image';
import { useState } from 'react';

interface Props {
  list: string[];
  selectedValue: string;
  extraDropdownClasses?: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<Props> = ({
  extraDropdownClasses,
  list,
  selectedValue,
  setSelectedItem,
}) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <button
      type='button'
      onBlur={() => setDropdownActive(false)}
      onClick={() => setDropdownActive(true)}
      className={`relative flex justify-between rounded border text-[14px] font-normal w-full bg-[rgba(255,255,255,0.03)] text-white placeholder:text-[rgba(255,255,255,0.25)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] py-[15px] pl-[27px] pr-5 mt-8 outline-none phones:px-[10px] ${extraDropdownClasses}`}>
      <p className='phones:whitespace-nowrap'>{selectedValue}</p>
      <Image priority alt='' src='/assets/svgs/caret-down.svg' width={10.5} height={6} />

      <div
        className={`absolute bottom-[calc(100%+5px)] left-0 w-full h-fit max-h-[20vh] rounded-lg bg-[rgba(255,255,255)] shadow-md border border-[rgba(0,0,0,0.1)] flex flex-col overflow-y-auto duration-300 ${
          dropdownActive || 'opacity-0 invisible'
        }`}>
        {list.map((item, index) => (
          <p
            key={index}
            className='bg-razzle-dazzle-rose font-semibold py-4 border-b-2 border-white relative before:absolute before:bg-razzle-dazzle-rose before:h-[calc(100%+2px)] before:w-[17%] before:top-0 before:left-0 after:absolute after:bg-razzle-dazzle-rose after:h-[calc(100%+2px)] after:w-[17%] after:top-0 after:right-0 last:border-heliotrope'
            onClick={e => {
              setSelectedItem(item);
              setDropdownActive(false);
              e.stopPropagation();
            }}>
            {item}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Dropdown;
