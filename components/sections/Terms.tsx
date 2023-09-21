import Image from 'next/image';
import Button from '../Button';

const Terms = () => {
  return (
    <section className='relative flex items-center justify-between pl-[9.95vw] pr-[7.82vw] pb-[161px]'>
      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute top-[159px] left-[35.7vw]'
      />

      <Image
        alt=''
        priority
        width={23}
        height={38}
        src='/assets/svgs/star-purple.svg'
        className='absolute top-[274px] left-[50.9vw]'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-white.svg'
        className='absolute top-[260px] right-[16.1vw]'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute top-[842px] right-[6.46vw]'
      />

      <Image
        alt=''
        priority
        width={30}
        height={36}
        src='/assets/svgs/star-purple.svg'
        className='absolute top-[838px] left-[5vw]'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute top-[697px] right-[35.14vw]'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-white.svg'
        className='absolute top-[803px] right-[40vw]'
      />

      <Image
        alt=''
        priority
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-3.svg'
        className='absolute top-[522px] -left-[181px] -z-2'
      />

      <div className='max-w-[569px]'>
        <header>
          <p className='mt-[169px] text-[32px] font-clash-display font-bold'>
            Privacy Policy and
            <span className='text-heliotrope block'>Terms</span>
          </p>

          <p className='mt-[17px] text-[rgba(255,255,255,0.75)] text-[14px] font-normal leading-[27.5px]'>
            Last updated on September 12, 2023
          </p>

          <p className='mt-[30px] max-w-[420px] text-[14px] leading-[26.4px]'>
            Below are our privacy &amp; policy, which outline a lot of goodies. It&apos;s our aim to
            always take of our participant
          </p>
        </header>

        <div className='mt-[69px] leading-[30.3px] text-[14px] pt-[59px] px-[72px] pb-14 rounded-[5px] border border-heliotrope bg-[rgba(217,217,217,0.03)]'>
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described in this policy.
          </p>

          <p className='text-heliotrope mt-6 text-[16px] font-bold leading-[34.6px]'>
            Licensing Policy
          </p>
          <p className='font-bold'>Here are terms of our Standard License:</p>

          <ul className='mt-[18px] flex flex-col gap-y-[18px] list-image-[url(/assets/svgs/check.svg)] list-inside'>
            <li className='first-letter:pl-3.5'>
              The Standard License grants you a non-exclusive right to navigate and register for our
              event
            </li>
            <li className='first-letter:pl-3.5'>
              You are licensed to use the item available at any free source sites, for your project
              developement
            </li>
          </ul>

          <Button href='/' title='Read More' extraClasses='mx-auto mt-6' />
        </div>
      </div>

      <div className='relative w-[559px] h-[749px] mt-[270px] before:absolute before:-top-[203px] before:left-12 before:bg-[url(/assets/svgs/secured-lock.svg)] before:w-[530px] before:h-[648px]'>
        <Image priority fill alt='' src='/assets/pngs/standing-on-lock.png' />
      </div>
    </section>
  );
};

export default Terms;
