import Link from 'next/link';
import Image from 'next/image';

import Logo from '../Logo';
import Socials from '../Socials';

const Footer = () => {
  return (
    <footer className='relative bg-ebony px-[12vw] pt-[70px] pb-[50px] grid grid-cols-[54%_30%_16%]'>
      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-white.svg'
        className='absolute top-[107px] left-[5vw]'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute top-[282px] left-[49vw]'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-grey.svg'
        className='absolute top-[99px] right-[30vw]'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-white.svg'
        className='absolute top-[235px] right-[8vw]'
      />

      <div className='text-[12px] font-normal leading-[20.7px]'>
        <Logo extraClasses='!text-[30px]' />
        <p className='mt-3 max-w-[412px]'>
          Getlinked Tech Hackathon is a technology innovation program established by a group of
          organizations with the aim of showcasing young and talented individuals in the field of
          technology
        </p>

        <p className='mt-14'>
          <Link href='/terms'>Terms of Use</Link>
          <span className='text-heliotrope mx-3'>|</span>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </p>
      </div>

      <div className='font-normal text-[12px] leading-[20.7px]'>
        <p className='text-heliotrope text-[14px] font-semibold leading-[24.14px]'>Useful Links</p>

        <Link href='/' className=' block mt-1.5'>
          Overview
        </Link>

        <Link href='#timeline' className=' block mt-[11px]'>
          Timeline
        </Link>

        <Link href='#faqs' className=' block mt-3'>
          FAQs
        </Link>

        <Link href='/' className=' block mt-3'>
          Register
        </Link>

        <div className='text-heliotrope mt-[18px] leading-[normal] flex items-center'>
          <p className='inline-block mr-4'>Follow us</p>
          <Socials />
        </div>
      </div>

      <div className='text-[12px] font-normal flex flex-col items-center'>
        <p className='text-heliotrope text-[14px] font-semibold leading-[24.14px]'>Contact Us</p>

        <p className='leading-[normal] relative mt-[19px] pl-7 before:absolute before:bg-[url(/assets/svgs/phone.svg)] before:w-3 before:h-3 before:left-0 before:top-[2px]'>
          +234 6707653444
        </p>

        <address className='not-italic leading-[19px] relative mt-[22px] pl-7 max-w-[120px] before:absolute before:bg-[url(/assets/svgs/location.svg)] before:w-[13px] before:h-[15px] before:left-0 before:top-1'>
          27,Alara Street Yaba 100012 Lagos State
        </address>
      </div>

      <p className='mt-[65px] text-[12px] font-normal col-start-1 col-end-4 self-center place-self-center'>
        All rights reserved. &copy; getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
