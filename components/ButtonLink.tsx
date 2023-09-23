import Link from 'next/link';

import ButtonLayout from './layout/ButtonLayout';

interface Props {
  href: string;
  title: string;
  isActive?: boolean;
  extraClasses?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ButtonLink: React.FC<Props> = ({ href, isActive, onClick, target, title, extraClasses }) => {
  return (
    <ButtonLayout extraClasses={extraClasses} isActive={isActive}>
      <Link
        href={href}
        target={target}
        onClick={onClick}
        className={`w-full h-full grid place-items-center ${
          isActive ? 'bg-haiti rounded-[3px]' : 'bg-transparent'
        }`}>
        {title}
      </Link>
    </ButtonLayout>
  );
};

export default ButtonLink;
