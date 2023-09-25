import Link from 'next/link';

import Logo from '../Logo';
import Socials from '../Socials';
import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';
import StarPurpleGradient from '../stars/StarPurpleGradient';

const Footer = () => {
  return (
    <footer className='relative bg-ebony bg-opacity-30 px-[12vw] pt-[70px] pb-[50px] grid grid-cols-[54%_30%_16%] phones:pl-[17.44vw] phones:pr-[13.08vw] phones:pt-[51px] phones:block phones:pb-[53px]'>
      <StarWhite width={15} height={18} top={107} left='5vw' extraClasses='phones:hidden' />
      <StarPurpleGradient left='49vw' top={282} extraClasses='phones:hidden' />
      <StarGrey top={99} right='30vw' width={15} height={18} extraClasses='phones:hidden' />
      <StarWhite width={15} height={18} top={235} right='8vw' extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarWhite width={9} height={10} top={128} left='9.23vw' extraClasses='hidden phones:block' />
      <StarGrey
        width={9}
        height={10}
        bottom={399}
        right='44.62vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        width={7}
        height={8}
        bottom={190}
        right='19.74vw'
        extraClasses='hidden phones:block'
      />
      <StarPurpleGradient
        width={7}
        height={8}
        bottom={94}
        left='35.13vw'
        extraClasses='hidden phones:block'
      />

      <div className='text-[12px] font-normal leading-[20.7px]'>
        <Logo extraClasses='!text-[30px] phones:!text-[20px]' />
        <p className='mt-3 max-w-[412px]'>
          Getlinked Tech Hackathon is a technology innovation program established by a group of
          organizations with the aim of showcasing young and talented individuals in the field of
          technology
        </p>

        <div className='mt-14 phones:mt-[39px]'>
          <Link href='/terms'>Terms of Use</Link>
          <span className='text-heliotrope mx-3'>|</span>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>

      <div className='z-2 font-normal text-[12px] leading-[20.7px] phones:mt-8'>
        <p className='text-heliotrope text-[14px] font-semibold leading-[24.14px]'>Useful Links</p>

        <Link href='/' className=' block mt-1.5'>
          Overview
        </Link>

        <Link href='/#timeline' className=' block mt-[11px]'>
          Timeline
        </Link>

        <Link href='/#faqs' className=' block mt-3'>
          FAQs
        </Link>

        <Link href='/register' className=' block mt-3'>
          Register
        </Link>

        <div className='text-heliotrope mt-[18px] leading-[normal] flex items-center phones:mt-3'>
          <p className='inline-block mr-4'>Follow us</p>
          <Socials />
        </div>
      </div>

      <div className='text-[12px] font-normal flex flex-col items-center phones:mt-[61px] phones:items-start'>
        <p className='text-heliotrope text-[14px] font-semibold leading-[24.14px]'>Contact Us</p>

        <p className='leading-[normal] relative mt-[19px] pl-7 before:absolute before:bg-[url(/assets/svgs/phone.svg)] before:w-3 before:h-3 before:left-0 before:top-[2px] phones:mt-2'>
          +234 6707653444
        </p>

        <address className='not-italic leading-[19px] relative mt-[22px] pl-7 max-w-[120px] before:absolute before:bg-[url(/assets/svgs/location.svg)] before:w-[13px] before:h-[15px] before:left-0 before:top-1'>
          27,Alara Street Yaba 100012 Lagos State
        </address>
      </div>

      <p className='mt-[65px] text-center text-[12px] font-normal col-start-1 col-end-4 self-center place-self-center phones:mt-[60px]'>
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
