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

const StarOutline: React.FC<Props> = ({
  top,
  left,
  right,
  zIndex,
  bottom,
  alt = '',
  width = 23,
  height = 38,
  extraClasses,
}) => {
  return (
    <Image
      priority
      alt={alt}
      unoptimized
      width={width}
      height={height}
      src='/assets/svgs/star-outline.svg'
      className={`absolute -z-1 ${extraClasses}`}
      style={{ top, left, right, bottom, zIndex }}
    />
  );
};

export default StarOutline;
