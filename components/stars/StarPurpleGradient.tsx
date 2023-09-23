import Image from 'next/image';

interface Props {
  alt?: string;
  width?: number;
  bottom?: number;
  height?: number;
  extraClasses?: string;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  zIndex?: number | string;
}

const StarPurpleGradient: React.FC<Props> = ({
  top,
  left,
  right,
  zIndex,
  bottom,
  alt = '',
  width = 21,
  height = 25,
  extraClasses,
}) => {
  return (
    <Image
      priority
      alt={alt}
      unoptimized
      width={width}
      height={height}
      src='/assets/svgs/star-purple-gradient.svg'
      style={{ top, left, right, bottom, zIndex }}
      className={`absolute -z-1 animate-pulse ${extraClasses}`}
    />
  );
};

export default StarPurpleGradient;
