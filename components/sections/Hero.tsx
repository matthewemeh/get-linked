import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useMemo, useState } from 'react';

import ButtonLink from '../ButtonLink';
import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';

import { breakdownTime } from '../../public/utils';

const Hero = () => {
  const [finishedTyping, setFinishedTyping] = useState<boolean>(false);

  const [now, setNow] = useState<number>(Date.now());
  const endDate: Date = new Date('2023-09-27T23:59:59');
  const timeLeft: number = useMemo(() => {
    const newTimeLeft: number = endDate.getTime() - now;

    return newTimeLeft > 0 ? newTimeLeft : 0;
  }, [now]);
  const { hours, minutes, seconds } = useMemo(() => breakdownTime(timeLeft), [timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    setTimeout(() => setNow(Date.now()), 1000);

    return () => {
      setTimeout(() => setNow(Date.now()), 1000);
    };
  }, [timeLeft]);

  useEffect(() => {
    if (!finishedTyping) {
      setTimeout(() => setFinishedTyping(true), 6000);
    }

    return () => {
      setTimeout(() => setFinishedTyping(true), 6000);
    };
  }, []);

  return (
    <section className='relative h-[813px] border-y border-[rgba(255,255,255,0.18)] overflow-hidden phones:grid-cols-1 phones:border-b-0 phones:h-[780px]'>
      <Image
        alt=''
        priority
        unoptimized
        width={1086}
        height={836}
        className='absolute -z-10 phones:hidden'
        src='/assets/pngs/purple-lens-flare-1.png'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={396}
        height={442}
        src='/assets/svgs/mobile-purple-lens-flare-1.svg'
        className='absolute -z-10 -top-12 -left-[1.538vw] w-screen hidden phones:block'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={951}
        height={994}
        src='/assets/svgs/purple-lens-flare-2.svg'
        className='absolute -z-10 right-0 phones:hidden'
      />

      <StarWhite top={68} left='13vw' extraClasses='phones:hidden' />
      <StarGrey top={146} left='58vw' extraClasses='phones:hidden' />
      <StarGrey top={605} left='40vw' extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarWhite
        top={81}
        width={10}
        height={12}
        left='30.77vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey top={81} width={6} height={8} right='16.154vw' extraClasses='hidden phones:block' />
      <StarGrey top={275} width={6} height={8} right='23.33vw' extraClasses='hidden phones:block' />

      <Image
        alt=''
        priority
        unoptimized
        width={1164}
        height={801}
        src='/assets/pngs/metrix.png'
        className='absolute -bottom-3 right-0 phones:hidden'
      />

      <div className='absolute h-fit top-8 right-[4vw] phones:top-[31px] phones:inset-0 phones:whitespace-nowrap phones:w-fit phones:left-1/2 phones:-translate-x-1/2'>
        <div className='relative'>
          <TypeAnimation
            sequence={[
              'Igniting',
              10,
              'Igniting a',
              10,
              'Igniting a Revolution',
              10,
              'Igniting a Revolution in',
              10,
              'Igniting a Revolution in HR',
              10,
              'Igniting a Revolution in HR Innovation',
            ]}
            wrapper='p'
            className={`text-[36px] italic font-bold relative  ${
              finishedTyping ? 'after:opacity-100' : 'after:opacity-0'
            }`}
            speed={50}
          />
          <div
            className={`absolute right-0 -bottom-4 bg-contain bg-no-repeat w-[255px] h-[17px] bg-[url(/assets/svgs/curved-line.svg)] phones:w-[115px] phones:h-[7px] phones:-right-1 phones:-bottom-3 phones:text-[16px] duration-500 ${
              finishedTyping ? 'after:opacity-100' : 'after:opacity-0'
            }`}
          />
        </div>
      </div>

      {/* left sub-section */}
      <div className='absolute top-[199px] w-[597px] left-[9vw] h-fit phones:top-[103px] phones:max-w-[281px] phones:inset-0 phones:mx-auto phones:text-center'>
        <h1 className='font-clash-display text-[80px] font-bold phones:text-[32px]'>
          <span className='block whitespace-nowrap relative after:absolute after:bg-contain after:bg-no-repeat after:right-7 after:-top-[47px] after:bg-[url(/assets/pngs/bulb.png)] after:w-[53px] after:h-[73px] phones:after:w-[18px] phones:after:h-[26px] phones:after:right-[14%] phones:after:-top-[37%]'>
            getlinked Tech
          </span>
          <span className='block relative after:absolute after:bg-contain after:bg-no-repeat after:top-2 after:-right-22 after:bg-[url(/assets/pngs/chain.png)] after:w-[86px] after:h-[86px] phones:after:w-[32.8px] phones:after:h-[32.8px] phones:after:top-0.5 phones:after:right-[20px] phones:text-left'>
            Hackathon&nbsp;
            <span className='text-heliotrope relative after:absolute after:bg-contain after:bg-no-repeat after:-right-36 after:top-5 after:bg-[url(/assets/pngs/fire.png)] after:w-[58px] after:h-[58px] phones:after:w-[22.12px] phones:after:h-[22.12px] phones:after:-right-[120%] phones:after:top-1.5'>
              1.0
            </span>
          </span>
        </h1>

        <p className='mt-2 max-w-[522px] leading-[33px] font-normal text-[20px] phones:text-[13px] phones:leading-[21.6px] phones:text-center phones:mt-[9px]'>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
        </p>

        <ButtonLink
          title='Register'
          href='/register'
          extraClasses='mt-10 phones:mt-6 phones:mx-auto'
        />

        <p className='text-[64px] font-normal leading-[85px] font-unica-one mt-[70px] phones:mt-[14.16px] phones:text-[48px] phones:leading-[63.8px]'>
          <span className="relative after:absolute after:content-['H'] after:font-montserrat after:text-[14px] leading-[19px] after:bottom-4">
            {`${hours}`.padStart(2, '0')}
          </span>
          <span className="relative after:absolute after:content-['M'] after:font-montserrat after:text-[14px] leading-[19px] after:bottom-4 mx-10 phones:mx-[34px]">
            {`${minutes}`.padStart(2, '0')}
          </span>
          <span className="relative after:absolute after:content-['S'] after:font-montserrat after:text-[14px] leading-[19px] after:bottom-4">
            {`${seconds}`.padStart(2, '0')}
          </span>
        </p>
      </div>

      {/* right sub-section */}
      <div className='absolute top-[126px] w-[828px] right-0 phones:top-[393.77px]'>
        <Image
          alt=''
          priority
          unoptimized
          width={797}
          height={715}
          src='/assets/pngs/man-wearing-smart-glasses-touching-virtual-screen.png'
          className='absolute right-0 phones:w-[100vw] phones:h-[362.4px]'
        />

        <Image
          alt=''
          priority
          unoptimized
          width={667}
          height={641}
          src='/assets/pngs/interconnected-lights.png'
          className='absolute z-[1] animate-ping-lights -top-2.5 right-16 phones:w-[86.7vw] phones:h-[324.89px] phones:right-[5.5vw] phones:-top-[5px]'
        />
      </div>
    </section>
  );
};

export default Hero;
