import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <section className='relative pt-[62px] pb-[78px] pl-[16vw] pr-[10vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)]'>
      <Image
        alt=''
        priority
        width={21}
        height={25}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute top-[223px] left-[12.6vw] -z-[1]'
      />

      <Image
        alt=''
        priority
        width={21}
        height={25}
        src='/assets/svgs/star-purple.svg'
        className='absolute top-[223px] right-[11.2vw] -z-[1]'
      />

      <div className='relative w-[490px] h-[477px] after:absolute after:bg-[url(/assets/pngs/curly-arrow.svg)] after:-bottom-4 after:-right-10 after:w-[71px] after:h-[67px]'>
        <Image
          priority
          width={490}
          height={477}
          alt='the big idea'
          className='absolute w-full h-full'
          src='/assets/pngs/the-big-idea.png'
        />
        <p className='absolute top-[227.68px] left-[170px] text-center text-[24px] font-bold leading-[29.5px] w-[145px]'>
          The Big Idea!
        </p>
      </div>

      <div className='max-w-[460px] pt-14'>
        <h2 className='font-clash-display text-[32px] font-bold'>
          Introduction to getlinked
          <span className='block text-heliotrope'>tech Hackathon 1.0</span>
        </h2>

        <p className='text-[14px] font-normal leading-[27.5px] mt-4'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
          shape the future. Whether you're a coding genius, a design maverick, or a concept wizard,
          you'll have the chance to transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can change the world,
          that's what we're all about!
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
