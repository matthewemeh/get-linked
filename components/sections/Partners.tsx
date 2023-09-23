import Image from 'next/image';
import { useContext } from 'react';

import StarWhite from '../stars/StarWhite';
import StarPurple from '../stars/StarPurple';
import StarPurpleGradient from '../stars/StarPurpleGradient';

import { AppContext } from '../../pages/_app';

const Partners = () => {
  const { MOBILE_BREAKPOINT, screenWidth } = useContext(AppContext);

  return (
    <section className='relative pt-[114px] border-b border-[rgba(255,255,255,0.18)] px-[8.9vw] pb-[128px] phones:pt-[41px] phones:px-[7.7vw] phones:pb-[104.41px]'>
      <header className='max-w-[452px] mx-auto text-center leading-[27.5px] phones:text-center'>
        <p className='anime anime-fade font-clash-display text-[32px] font-bold phones:text-[20px]'>
          Partners and Sponsors
        </p>
        <p className='anime anime-fade delay-1000 mt-[22px] text-[14px] font-normal phones:mt-[5px] phones:text-[12px] phones:leading-[20.5px]'>
          Getlinked Hackathon 1.0 is honored to have the following major companies as its partners
          and sponsors
        </p>
      </header>

      <StarPurple left='14.4vw' top={241} extraClasses='phones:hidden' />
      <StarPurpleGradient left='56vw' top={384} extraClasses='phones:hidden' />
      <StarWhite top={735} left='56vw' extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarPurple
        width={8}
        top={178}
        height={10}
        left='13.3vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        top={310}
        width={10}
        height={12}
        right='18.21vw'
        extraClasses='hidden phones:block'
      />
      <StarPurpleGradient
        top={232}
        width={7}
        height={7}
        right='43.59vw'
        extraClasses='hidden phones:block'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-3.svg'
        className='absolute -left-[16.042vw] bottom-[173px] -z-2'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-3.svg'
        className='absolute -right-[32.71vw] top-[320px] -z-2'
      />

      <main className='grid grid-rows-[139.68px_139.68px] grid-cols-[288.91px_285.24px_288.18px] justify-center rounded-[5px] mt-[65px] py-36 px-[179px] border border-heliotrope bg-[rgba(255,255,255,0.01)] phones:mt-[41px] phones:grid-rows-[37.02px_37.02px] phones:grid-cols-[76.66px_85.24px_76.46px] phones:py-[38px] phones:px-[12.18vw]'>
        <div className="relative w-full h-full grid place-items-center pb-28 phones:pb-0 before:absolute before:bottom-0 before:left-0 before:bg-heliotrope before:content-[''] before:w-[90%] before:h-1 after:absolute after:content-[''] after:bg-heliotrope after:top-0 after:right-0 after:w-1 after:h-[80%] phones:before:h-0.5 phones:after:w-0.5">
          <Image
            alt=''
            priority
            width={screenWidth > MOBILE_BREAKPOINT ? 120.56 : 32}
            height={screenWidth > MOBILE_BREAKPOINT ? 113.95 : 30.23}
            src='/assets/pngs/liberty-assured-logo.png'
            className='anime anime-fade delay-[1s]'
          />
        </div>
        <div className="relative w-full h-full grid place-items-center self-center place-self-center before:absolute before:content-[''] before:bg-heliotrope before:h-1 before:w-[80%] before:bottom-0 phones:before:h-0.5">
          <Image
            alt=''
            priority
            width={screenWidth > MOBILE_BREAKPOINT ? 213.19 : 56.57}
            height={screenWidth > MOBILE_BREAKPOINT ? 40.43 : 10.73}
            src='/assets/pngs/liberty-company-white-logo.png'
            className='anime anime-fade delay-[3s]'
          />
        </div>
        <div className="w-full h-full relative grid place-items-center self-center place-self-center before:absolute before:bottom-0 before:right-0 before:bg-heliotrope before:content-[''] before:w-[90%] before:h-1 after:absolute after:content-[''] after:bg-heliotrope after:left-0 after:top-0 after:w-1 after:h-[80%] phones:before:h-0.5 phones:after:w-0.5">
          <Image
            alt=''
            priority
            unoptimized
            width={screenWidth > MOBILE_BREAKPOINT ? 131.59 : 34.92}
            height={screenWidth > MOBILE_BREAKPOINT ? 107.33 : 28.48}
            src='/assets/pngs/winwise-logo.png'
            className='anime anime-fade delay-[5s]'
          />
        </div>
        <div className='w-full h-full relative grid place-items-center self-center place-self-center pt-4 phones:pt-0'>
          <Image
            alt=''
            priority
            width={screenWidth > MOBILE_BREAKPOINT ? 147.03 : 39.01}
            height={screenWidth > MOBILE_BREAKPOINT ? 109.54 : 29.06}
            src='/assets/pngs/whispersms-logo.png'
            className='anime anime-fade delay-[7s]'
          />
        </div>
        <div className="w-full h-full relative grid place-items-center self-center place-self-center pt-4 phones:pt-0 before:absolute before:bottom-0 before:left-0 before:w-1 before:h-[80%] before:content-[''] before:bg-heliotrope after:absolute after:bottom-0 after:right-0 after:w-1 after:h-[80%] after:content-[''] after:bg-heliotrope phones:before:w-0.5 phones:after:w-0.5">
          <Image
            priority
            alt=''
            width={screenWidth > MOBILE_BREAKPOINT ? 204.37 : 54.23}
            height={screenWidth > MOBILE_BREAKPOINT ? 20.58 : 30}
            src='/assets/pngs/paybox-logo.png'
            className='anime anime-fade delay-[9s]'
          />
        </div>
        <div className='w-full h-full relative grid place-items-center self-center place-self-center pt-4 phones:pt-0'>
          <Image
            priority
            alt=''
            width={screenWidth > MOBILE_BREAKPOINT ? 231 : 69}
            height={screenWidth > MOBILE_BREAKPOINT ? 21 : 21}
            src='/assets/pngs/vuzual-plus.png'
            className='anime anime-fade delay-[11s]'
          />
        </div>
      </main>
    </section>
  );
};

export default Partners;
