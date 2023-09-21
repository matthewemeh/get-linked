interface Props {
  date: string;
  index: number;
  title: string;
  subtitle: string;
  reversed?: boolean;
  extraClasses?: string;
}

const TimelineItem: React.FC<Props> = ({
  date,
  index,
  title,
  reversed,
  subtitle,
  extraClasses,
}) => {
  return (
    <div
      className={`relative w-[53px] h-[53px] flex items-center justify-center text-[24px] font-bold rounded-[26.5px] bg-[linear-gradient(270deg,#903AFF_0%,#D434FE_100%)] before:absolute before:-top-[94px] before:content-[''] before:w-1 before:h-[86px] before:bg-heliotrope after:absolute after:top-[65px] after:content-[''] after:w-1 after:h-[137px] after:bg-heliotrope ${extraClasses}`}>
      <p>{index}</p>

      <p
        className={`absolute text-heliotrope text-[24px] font-bold w-[436px] ${
          reversed ? 'left-[150px] text-left' : 'right-[150px] text-right'
        }`}>
        {title}
        <span className='block mt-3 text-[14px] font-normal leading-6 text-white'>{subtitle}</span>
      </p>

      <p
        className={`absolute text-heliotrope text-[24px] font-bold w-max ${
          reversed ? 'right-[138px] text-right' : 'left-[138px] text-left'
        }`}>
        {date}
      </p>
    </div>
  );
};

export default TimelineItem;
