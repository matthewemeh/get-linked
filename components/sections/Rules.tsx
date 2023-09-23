import Image from 'next/image';

import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';

const Rules = () => {
  return (
    <section className='relative h-[620px] pb-7 pl-[12.8vw] pr-[5.6vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)] phones:flex-col-reverse phones:px-[8.7vw] phones:pb-[46px] phones:h-fit'>
      <Image
        alt=''
        priority
        unoptimized
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-3.svg'
        className='absolute -bottom-[92px] left-0 -z-2 phones:hidden'
      />
      <Image
        alt=''
        priority
        unoptimized
        width={404}
        height={959}
        src='/assets/svgs/purple-lens-flare-4.svg'
        className='absolute top-[39px] -right-[1.4583vw] -z-2 phones:hidden'
      />
      <Image
        alt=''
        priority
        unoptimized
        width={396}
        height={442}
        src='/assets/svgs/mobile-purple-lens-flare-2.svg'
        className='absolute -z-10 -top-[106px] -left-[3.59vw] w-screen hidden phones:block'
      />
      <Image
        alt=''
        priority
        unoptimized
        width={252}
        height={446}
        src='/assets/svgs/mobile-purple-lens-flare-3.svg'
        className='absolute -z-10 top-[92px] -right-[4.359vw] hidden phones:block'
      />

      <StarWhite top={405} left='51.5vw' extraClasses='phones:hidden' />
      <StarGrey
        top={145}
        width={21}
        zIndex={1}
        height={25}
        left='30.5vw'
        extraClasses='phones:hidden'
      />

      {/* mobile view stars */}
      <StarWhite
        top={185}
        width={10}
        height={12}
        left='11.03vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey
        width={12}
        zIndex={1}
        height={14}
        bottom={293}
        right='10.77vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        width={10}
        height={12}
        bottom={19}
        left='27.69vw'
        extraClasses='hidden phones:block'
      />

      <div className='max-w-[519.5px] phones:text-center phones:mt-2.5'>
        <h3 className='anime anime-left font-clash-display text-[32px] font-bold phones:text-[20px] phones:leading-[26.6px]'>
          Rules and
          <span className='block text-heliotrope'>Guidelines</span>
        </h3>

        <p className='anime anime-left delay-700 text-[14px] font-normal leading-[27.5px] mt-4 phones:mt-[9px]'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
          shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept
          wizard, you&apos;ll have the chance to transform your ideas into reality. Solving
          real-world problems, pushing the boundaries of technology, and creating solutions that can
          change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <div className='relative after:absolute after:bg-contain after:bg-no-repeat after:right-[19.23%] after:top-[16.72%] after:-z-1 after after:bg-[url(/assets/svgs/ellipse.svg)] after:w-[20.18%] after:h-[20.18%] phones:after:hidden phones:w-full phones:h-full'>
        <Image
          priority
          unoptimized
          width={664}
          height={664}
          alt='a woman sitting'
          src='/assets/pngs/woman-sitting.png'
        />
      </div>
    </section>
  );
};

export default Rules;
