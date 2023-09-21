import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  extraClasses?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Button: React.FC<Props> = ({ href, target, title, extraClasses }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`w-[172px] h-[53px] text-[16px] font-normal grid place-items-center rounded bg-[linear-gradient(270deg,#903aff_0%,#ff26b9_99.9%,#fe34b9_100%)] ${extraClasses}`}>
      {title}
    </Link>
  );
};

export default Button;
