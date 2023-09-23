import Link from 'next/link';

interface Props {
  id?: string;
  isActive?: boolean;
  extraClasses?: string;
  href: NavigationRoute;
  children: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavLink: React.FC<Props> = ({
  id,
  href,
  target,
  onClick,
  children,
  isActive,
  extraClasses,
}) => {
  return (
    <Link
      id={id}
      href={href}
      target={target}
      onClick={onClick}
      className={`${
        isActive &&
        'bg-clip-text text-transparent bg-[linear-gradient(90deg,#903AFF_3.08%,#FF26B9_93.85%)] phones:font-inter'
      } ${extraClasses}`}>
      {children}
    </Link>
  );
};

export default NavLink;
