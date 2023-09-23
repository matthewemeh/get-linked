import Image from 'next/image';

import ButtonLink from '../ButtonLink';
import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';
import StarPurple from '../stars/StarPurple';
import PolicyListItem from '../PolicyListItem';
import StarPurpleGradient from '../stars/StarPurpleGradient';

const Terms = () => {
  return (
    <section className='relative flex items-center justify-between pl-[9.95vw] pr-[7.82vw] pb-[161px] phones:mt-[71px] phones:px-[13.08vw] phones:flex-col phones:pb-[83px]'>
      <StarGrey top={159} left='35.7vw' extraClasses='phones:hidden' />
      <StarPurple width={23} height={38} top={274} left='50.9vw' extraClasses='phones:hidden' />
      <StarWhite width={15} height={18} top={260} right='16.1vw' extraClasses='phones:hidden' />
      <StarGrey top={842} right='6.46vw' extraClasses='phones:hidden' />
      <StarPurple top={838} left='5vw' extraClasses='phones:hidden' />
      <StarPurpleGradient right='35.14vw' top={697} extraClasses='phones:hidden' />
      <StarWhite width={15} height={18} top={803} right='40vw' extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarGrey width={8} height={8} top={43} right='24.62vw' extraClasses='hidden phones:block' />
      <StarPurpleGradient
        top={160}
        width={17}
        height={20}
        right='17.18vw'
        extraClasses='hidden phones:block'
      />
      <StarPurple
        top={726}
        width={17}
        height={20}
        left='5.64vw'
        extraClasses='hidden phones:block'
      />
      <StarPurple
        width={17}
        height={20}
        left='10vw'
        bottom={438}
        extraClasses='hidden phones:block'
      />
      <StarWhite
        width={7}
        height={8}
        bottom={430}
        right='31.03vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        width={9}
        height={10}
        bottom={147}
        left='22.56vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey width={8} height={8} bottom={139} right='17vw' extraClasses='hidden phones:block' />

      <Image
        alt=''
        priority
        unoptimized
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-3.svg'
        className='absolute top-[522px] -left-[13.61vw] -z-2'
      />

      <div className='max-w-[569px]'>
        <header className='phones:text-center'>
          <p className='anime anime-left mt-[169px] text-[32px] font-clash-display font-bold phones:mt-0 phones:text-[20px]'>
            Privacy Policy and
            <span className='text-heliotrope block'>Terms</span>
          </p>

          <p className='anime anime-left delay-[1s] mt-[17px] text-[rgba(255,255,255,0.75)] text-[14px] font-normal leading-[27.5px] phones:mt-0 phones:text-[12px]'>
            Last updated on September 12, 2023
          </p>

          <p className='anime anime-left delay-[2s] mt-[30px] max-w-[420px] text-[14px] leading-[26.4px] phones:mt-7 phones:text-[12px] phones:leading-[22.61px]'>
            Below are our privacy &amp; policy, which outline a lot of goodies. It&apos;s our aim to
            always take of our participant
          </p>
        </header>

        <div className='mt-[69px] leading-[30.3px] text-[14px] pt-[59px] px-[72px] pb-14 rounded-[5px] border border-heliotrope bg-[rgba(217,217,217,0.03)] phones:mt-[30px] phones:pt-[45px] phones:px-3 phones:pb-[49.65px]'>
          <p className='phones:text-center phones:text-[12px] phones:leading-[26px]'>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described in this policy.
          </p>

          <p className='text-heliotrope mt-6 text-[16px] font-bold leading-[34.6px] phones:mt-[21px] phones:text-[13px] phones:leading-[28.13px]'>
            Licensing Policy
          </p>
          <p className='font-bold phones:text-[12px] phones:leading-[26px]'>
            Here are terms of our Standard License:
          </p>

          <ul className='mt-[18px] flex flex-col gap-y-[18px] list-image-[url(/assets/svgs/check.svg)] list-inside phones:text-[12px] phones:leading-[21.11px] phones:mt-[21px] phones:gap-y-6 phones:list-image-none'>
            <PolicyListItem
              text='The Standard License grants you a non-exclusive right to navigate and register for our
              event'
            />
            <PolicyListItem
              text='You are licensed to use the item available at any free source sites, for your project
              developement'
            />
          </ul>

          <ButtonLink
            href='/'
            title='Read More'
            extraClasses='mx-auto mt-6 phones:mx-auto phones:!mt-7 phones:!w-[96.35px] phones:!h-[31.35px]'
          />
        </div>
      </div>

      <div className='relative w-[559px] h-[749px] mt-[270px] before:absolute before:bg-contain before:bg-no-repeat before:-top-[203px] before:left-12 before:bg-[url(/assets/svgs/secured-lock.svg)] before:w-[530px] before:h-[648px] phones:before:w-[249px] phones:before:h-[311px] phones:w-[262px] phones:h-[351px] phones:mt-36 phones:before:-top-[93px] phones:before:left-6'>
        <Image priority fill alt='' src='/assets/pngs/standing-on-lock.png' />
      </div>
    </section>
  );
};

export default Terms;
