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

const StarWhite: React.FC<Props> = ({
  top,
  left,
  right,
  zIndex,
  bottom,
  alt = '',
  width = 26,
  height = 32,
  extraClasses,
}) => {
  return (
    <Image
      priority
      alt={alt}
      unoptimized
      width={width}
      height={height}
      src='/assets/svgs/star-white.svg'
      style={{ top, left, right, bottom, zIndex }}
      className={`absolute -z-1 animate-pulse ${extraClasses}`}
    />
  );
};

export default StarWhite;
