interface Props {
  extraClasses?: string;
}

const Logo: React.FC<Props> = ({ extraClasses }) => {
  return (
    <p
      aria-description='logo'
      className={`text-[36px] leading-[normal] font-bold font-clash-display ${extraClasses}`}>
      get<span className='text-heliotrope'>linked</span>
    </p>
  );
};

export default Logo;
