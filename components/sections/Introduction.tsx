import Image from 'next/image';

import StarPurple from '../stars/StarPurple';
import StarPurpleGradient from '../stars/StarPurpleGradient';

const Introduction = () => {
  return (
    <section className='relative pt-[62px] pb-[78px] pl-[16vw] pr-[9vw] flex items-center justify-center gap-x-[7.57vw] border-b border-[rgba(255,255,255,0.18)] large:pl-[5vw] phones:flex-col 1105px:gap-x-[2vw] phones:px-[8.7vw] phones:pt-0 phones:pb-[70px]'>
      <StarPurpleGradient left='12.6vw' top={223} extraClasses='phones:hidden' />
      <StarPurple width={21} height={25} right='11.2vw' top={223} extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarPurpleGradient
        top={80}
        width={11}
        height={13}
        left='14.62vw'
        extraClasses='hidden phones:block'
      />
      <StarPurple
        width={8}
        top={340}
        height={10}
        right='11.282vw'
        extraClasses='hidden phones:block'
      />

      <div className='relative w-[490px] h-[477px] after:absolute after:bg-contain after:bg-no-repeat after:bg-[url(/assets/pngs/curly-arrow.png)] after:-bottom-4 after:-right-10 after:w-[71px] after:h-[67px] phones:w-[264px] phones:h-[257px] phones:after:w-[19.46px] phones:after:h-[22.82px] phones:after:left-1/2 phones:after:-translate-x-1/2 phones:after:-bottom-[30px]'>
        <Image
          priority
          unoptimized
          width={490}
          height={477}
          alt='the big idea'
          className='absolute w-full h-full'
          src='/assets/pngs/the-big-idea.png'
        />
        <p className='absolute top-[47.73%] left-1/2 -translate-x-1/2 text-center text-[24px] font-bold leading-[29.5px] w-[145px] phones:text-[14px] phones:leading-[17.15px] phones:w-[78.04px]'>
          The Big Idea!
        </p>
      </div>

      <div className='max-w-[519.5px] pt-14 phones:text-center phones:pt-[58px]'>
        <h2 className='anime anime-left font-clash-display relative text-[32px] font-bold phones:text-[20px] phones:leading-[26.6px]'>
          Introduction to getlinked
          <span className='block text-heliotrope'>tech Hackathon 1.0</span>
        </h2>

        <p className='anime anime-left delay-700 text-[14px] font-normal leading-[27.5px] mt-4 phones:mt-[9px] phones:text-[13px] phones:px-3'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
          shape the future. Whether you&apos;re a coding genius, a design maverick, or a concept
          wizard, you&apos;ll have the chance to transform your ideas into reality. Solving
          real-world problems, pushing the boundaries of technology, and creating solutions that can
          change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </section>
  );
};

export default Introduction;
