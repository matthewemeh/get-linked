import Image from 'next/image';

import StarWhite from '../stars/StarWhite';
import StarPurple from '../stars/StarPurple';
import StarPurpleGradient from '../stars/StarPurpleGradient';

const Partners = () => {
  return (
    <section className='relative pt-[114px] border-b border-[rgba(255,255,255,0.18)] px-[8.9vw] pb-[128px] phones:pt-[41px] phones:px-[7.7vw] phones:pb-[104.41px]'>
      <header className='max-w-[452px] mx-auto text-center leading-[27.5px] phones:text-center'>
        <p className='font-clash-display text-[32px] font-bold phones:text-[20px]'>
          Partners and Sponsors
        </p>
        <p className='mt-[22px] text-[14px] font-normal phones:mt-[5px] phones:text-[12px] phones:leading-[20.5px]'>
          Getlinked Hackathon 1.0 is honored to have the following major companies as its partners
          and sponsors
        </p>
      </header>

      <StarPurple left='14.4vw' top={241} />

      <StarPurpleGradient left='56vw' top={384} />

      <StarWhite top={735} left='56vw' />

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

      <main className='grid grid-rows-[139.68px_139.68px] grid-cols-[288.91px_285.24px_288.18px] justify-center rounded-[5px] mt-[65px] py-36 px-[179px] border border-heliotrope bg-[rgba(255,255,255,0.01)] phones:mt-[41px] phones:scale-[0.2654]'>
        <div className='w-full h-full grid place-items-center border-r-2 border-b-2 border-heliotrope pb-28'>
          <Image
            alt=''
            priority
            width={120.56}
            height={113.95}
            src='/assets/pngs/liberty-assured-logo.png'
          />
        </div>
        <div className="relative w-full h-full grid place-items-center self-center place-self-center border-x-2 border-b-2 border-heliotrope before:absolute before:-left-[29.775px] before:-bottom-[23.525px] before:content-[''] before:w-[59.55px] before:h-[47.05px] before:bg-black-pearl  after:absolute after:-right-[29.775px] after:-bottom-[23.525px] after:content-[''] after:w-[59.55px] after:h-[47.05px] after:bg-black-pearl">
          <Image
            alt=''
            priority
            width={213.19}
            height={40.43}
            src='/assets/pngs/liberty-company-white-logo.png'
          />
        </div>
        <div className='w-full h-full grid place-items-center self-center place-self-center border-l-2 border-b-2 border-heliotrope pb-32'>
          <Image
            alt=''
            priority
            unoptimized
            width={131.59}
            height={107.33}
            src='/assets/pngs/winwise-logo.png'
          />
        </div>
        <div className='w-full h-full grid place-items-center self-center place-self-center border-r-2 border-t-2 border-heliotrope pt-4'>
          <Image
            alt=''
            priority
            width={147.03}
            height={109.54}
            src='/assets/pngs/whispersms-logo.png'
          />
        </div>
        <div className='w-full h-full grid place-items-center self-center place-self-center border-x-2 border-t-2 border-heliotrope pt-4'>
          <Image priority alt='' width={204.37} height={20.58} src='/assets/pngs/paybox-logo.png' />
        </div>
        <div className='w-full h-full grid place-items-center self-center place-self-center border-l-2 border-t-2 border-heliotrope pt-4'>
          <Image priority alt='' width={231} height={21} src='/assets/pngs/vuzual-plus.png' />
        </div>
      </main>
    </section>
  );
};

export default Partners;
