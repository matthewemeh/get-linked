import Link from 'next/link';

import Button from './Button';

const Navigation = () => {
  return (
    <nav className='px-[9vw] pt-[6.5vh] pb-[25px] border-[rgba(255,255,255,0.18)] border-b flex items-center justify-between'>
      <p aria-description='logo' className='text-[36px] font-bold font-clash-display'>
        get<span className='text-heliotrope'>linked</span>
      </p>

      <div className='text-[16px] font-normal flex items-center justify-center gap-x-[4vw]'>
        <Link href='/timeline'>Timeline</Link>
        <Link href='/overview'>Overview</Link>
        <Link href='/faqs'>FAQs</Link>
        <Link href='/contact'>Contact</Link>
        <Button href='/register' extraClasses='ml-[4.5vw]' title='Register'></Button>
      </div>
    </nav>
  );
};

export default Navigation;
