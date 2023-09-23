import Image from 'next/image';

import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';
import StarPurpleGradient from '../stars/StarPurpleGradient';

const Prizes = () => {
  return (
    <section
      id='prizes'
      className='relative pl-[7.2vw] pr-[9vw] flex items-center justify-between gap-x-[37px] phones:flex-col phones:px-[12.31vw] phones:pb-[89.27px]'>
      <Image
        alt=''
        priority
        unoptimized
        width={1558}
        height={945}
        src='/assets/pngs/premium-photo.png'
        className='absolute left-0 w-full h-full -z-3 phones:hidden'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={444}
        height={848}
        src='/assets/pngs/mobile-premium-photo.png'
        className='absolute left-0 w-screen h-full -z-3 hidden phones:block'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={600}
        height={948}
        className='absolute left-0 top-32 -z-2'
        src='/assets/svgs/purple-lens-flare-3.svg'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={404}
        height={959}
        src='/assets/svgs/purple-lens-flare-4.svg'
        className='absolute -right-[1.4583vw] top-[224px] -z-2 phones:hidden'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={249}
        height={444}
        src='/assets/svgs/mobile-purple-lens-flare-7.svg'
        className='absolute -right-[3.59vw] -bottom-[37px] -z-2 hidden phones:block'
      />

      <StarPurpleGradient left='21.7vw' top={79} extraClasses='phones:hidden' />
      <StarWhite top={275} left='48vw' extraClasses='phones:hidden' />
      <StarPurpleGradient right='19vw' top={163} extraClasses='phones:hidden' />
      <StarWhite top={407} right='9vw' extraClasses='phones:hidden' />
      <StarGrey right='24.4vw' bottom={107} extraClasses='phones:hidden' />
      <StarWhite width={15} height={18} left='18vw' bottom={148} extraClasses='phones:hidden' />
      <StarWhite top={550} width={15} height={18} left='33.4vw' extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarPurpleGradient
        top={46}
        width={7}
        height={9}
        left='14.62vw'
        zIndex={0}
        extraClasses='hidden phones:block'
      />
      <StarPurpleGradient
        top={91}
        width={7}
        height={9}
        right='28.21vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        top={492}
        width={10}
        height={12}
        left='17.44vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        top={562}
        width={10}
        height={12}
        right='15.64vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey
        width={10}
        height={12}
        bottom={45}
        right='35.13vw'
        extraClasses='hidden phones:block'
      />

      <header className='absolute top-[74px] left-[58.3vw] phones:static phones:text-center phones:mt-[72px]'>
        <h6 className='font-clash-display text-[32px] font-bold phones:text-[20px] phones:max-w-[109px] phones:text-center phones:mx-auto'>
          Prizes and <span className='block text-heliotrope'>Rewards</span>
        </h6>
        <p className='text-[16px] font-normal leading-[27.3px] max-w-[401px] mt-4 phones:mt-[3px] phones:text-[12px] phones:leading-[20.51px]'>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </header>

      <div className='w-[548px] h-[482px] mr-10 z-[3] phones:w-[82.31vw] phones:h-[282px] phones:mt-10 phones:mr-0'>
        <Image src='/assets/pngs/trophy.png' alt='' priority unoptimized width={548} height={482} />
      </div>

      <div className='flex mt-[483px] mb-[149px] phones:mt-32 phones:mb-0'>
        <div className='relative z-[3] pt-[111px] w-[212px] h-[296px] text-center rounded-lg border border-heliotrope bg-[rgba(212,52,254,0.12)] phones:w-[90px] phones:h-[125.7px] phones:pt-[55px]'>
          <Image
            alt=''
            priority
            unoptimized
            width={179}
            height={180}
            src='/assets/pngs/silver_medal.png'
            className='absolute left-1/2 -translate-x-1/2 -top-[84px] phones:-top-10'
          />
          <p className='text-[36px] font-bold phones:text-[12px]'>2nd</p>
          <p className='text-[24px] font-semibold -mt-1 phones:text-[12px]'>Runner</p>
          <p className='text-heliotrope text-[32px] font-bold phones:text-[14px]'>N300,000</p>
        </div>

        <div className='relative z-[3] bottom-[34px] pt-[149px] pb-[21px] w-[212px] h-[347px] text-center rounded-lg border border-electric-violet-1 bg-[rgba(144,58,255,0.12)] ml-[30px] mr-[26px] phones:w-[90px] phones:h-[170.3px] phones:ml-[13px] phones:mr-[11px] phones:pt-[90px]'>
          <div className='w-[296px] h-[296px] absolute left-1/2 -translate-x-1/2 -top-[149px] phones:w-[125.7px] phones:h-[125.7px] phones:-top-[62.41px]'>
            <Image alt='' unoptimized priority fill src='/assets/pngs/gold_medal.png' />
          </div>
          <p className='text-[36px] font-bold phones:text-[12px]'>1st</p>
          <p className='text-[24px] font-semibold phones:text-[12px]'>Runner</p>
          <p className='text-electric-violet-1 text-[32px] font-bold leading-[69px] phones:text-[14px] phones:leading-[27px]'>
            N400,000
          </p>
        </div>

        <div className='relative z-[3] pt-[111px] pb-[33px] w-[212px] h-[296px] text-center rounded-lg border border-heliotrope bg-[rgba(212,52,254,0.12)] phones:w-[90px] phones:h-[125.7px] phones:pt-[55px]'>
          <Image
            alt=''
            priority
            unoptimized
            width={179}
            height={180}
            src='/assets/pngs/bronze_medal.png'
            className='absolute left-1/2 -translate-x-1/2 -top-[84px] phones:-top-10'
          />
          <p className='text-[36px] font-bold phones:text-[12px]'>3rd</p>
          <p className='text-[24px] font-semibold -mt-1 phones:text-[12px]'>Runner</p>
          <p className='text-heliotrope text-[32px] font-bold phones:text-[12px]'>N150,000</p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
