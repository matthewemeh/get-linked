import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import Button from '../Button';

import { breakdownTime } from '../../public/utils';

const Hero = () => {
  const [now, setNow] = useState<number>(Date.now());
  const endDate: Date = new Date('2023-09-23T11:59:00');
  const timeLeft: number = useMemo(() => endDate.getTime() - now, [now]);
  const { hours, minutes, seconds } = useMemo(() => breakdownTime(timeLeft), [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) return;

    setTimeout(() => setNow(Date.now()), 1000);

    return () => {
      setTimeout(() => setNow(Date.now()), 1000);
    };
  }, [timeLeft]);

  return (
    <section className='relative h-[813px] border-y border-[rgba(255,255,255,0.18)] grid grid-cols-2 overflow-hidden'>
      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-white.svg'
        className='absolute top-[68px] left-[13vw]'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute top-[146px] left-[58vw]'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute top-[605px] left-[40vw]'
      />

      <Image
        alt=''
        priority
        width={1164}
        height={801}
        src='/assets/pngs/metrix.png'
        className='absolute -bottom-3 right-0'
      />

      <div className='absolute top-8 right-[4vw]'>
        <p className='w-fit text-[36px] italic font-bold relative after:absolute after:right-0 after:-bottom-4 after:w-[255px] after:h-[17px] after:bg-[url(/assets/svgs/curved-line.svg)]'>
          Igniting a Revolution in HR Innovation
        </p>
      </div>

      {/* left sub-section */}
      <div className='absolute top-[199px] w-[597px] left-[9vw]'>
        <h1 className='font-clash-display text-[80px] font-bold'>
          <span className='inline-block relative after:absolute after:right-6 after:-top-12 after:bg-[url(/assets/pngs/bulb.png)] after:w-[53px] after:h-[73px]'>
            getlinked Tech
          </span>
          <span className='inline-block relative after:absolute after:top-2 after:-right-22 after:bg-[url(/assets/pngs/chain.png)] after:w-[86px] after:h-[86px]'>
            Hackathon&nbsp;
            <span className='text-heliotrope relative after:absolute after:-right-36 after:top-5 after:bg-[url(/assets/pngs/fire.png)] after:w-[58px] after:h-[58px]'>
              1.0
            </span>
          </span>
        </h1>

        <p className='mt-2 max-w-[522px] leading-[33px] font-normal text-[20px]'>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
        </p>

        <Button title='Register' href='/register' extraClasses='mt-10' />

        <p className={`text-[64px] font-normal leading-[85px] font-unica-one mt-[70px]`}>
          <span className="relative after:absolute after:content-['H'] after:font-montserrat after:text-[14px] leading-[19px] after:bottom-4">
            {`${hours}`.padStart(2, '0')}
          </span>
          <span className="relative after:absolute after:content-['M'] after:font-montserrat after:text-[14px] leading-[19px] after:bottom-4 mx-10">
            {`${minutes}`.padStart(2, '0')}
          </span>
          <span className="relative after:absolute after:content-['S'] after:font-montserrat after:text-[14px] leading-[19px] after:bottom-4">
            {`${seconds}`.padStart(2, '0')}
          </span>
        </p>
      </div>

      {/* right sub-section */}
      <div className='absolute top-[126px] w-[828px] right-0'>
        <Image
          alt=''
          priority
          quality={100}
          width={797}
          height={715}
          className='absolute right-0'
          src='/assets/pngs/man-wearing-smart-glasses-touching-virtual-screen.png'
        />
        <Image
          alt=''
          priority
          width={667}
          height={641}
          className='absolute z-[1] -top-2.5 right-16'
          src='/assets/pngs/interconnected-lights.png'
        />
      </div>
    </section>
  );
};

export default Hero;
