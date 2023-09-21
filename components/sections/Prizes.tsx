import Image from 'next/image';

const Prizes = () => {
  return (
    <section
      id='prizes'
      className='relative pl-[7.2vw] pr-[9vw] flex items-center justify-between gap-x-[37px] bg-ebony'>
      {/* <Image
        alt=''
        priority
        unoptimized
        width={1558}
        height={945}
        src='/assets/pngs/premium-photo.png'
        className='absolute left-0 w-full h-full -z-3'
      /> */}

      <Image
        alt=''
        priority
        width={600}
        height={948}
        className='absolute left-0 top-32 z-1'
        src='/assets/svgs/purple-lens-flare-3.svg'
      />

      <Image
        alt=''
        priority
        width={404}
        height={949}
        className='absolute right-0 top-48 z-1'
        src='/assets/svgs/purple-lens-flare-4.svg'
      />

      <Image
        alt=''
        priority
        width={21}
        height={25}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute left-[21.7vw] top-[79px] z-2'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-white.svg'
        className='absolute left-[48vw] top-[275px] z-2'
      />

      <Image
        alt=''
        priority
        width={21}
        height={25}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute right-[19vw] top-[163px] z-2'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-white.svg'
        className='absolute right-[9vw] top-[407px] z-2'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute right-[24.4vw] bottom-[107px] z-2'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-white.svg'
        className='absolute left-[18vw] bottom-[148px] z-2'
      />

      <Image
        alt=''
        priority
        width={15}
        height={18}
        src='/assets/svgs/star-white.svg'
        className='absolute left-[33.4vw] top-[550px] z-2'
      />

      <header className='absolute top-[74px] left-[58.3vw]'>
        <h6 className='font-clash-display text-[32px] font-bold'>
          Prizes and <span className='block text-heliotrope'>Rewards</span>
        </h6>
        <p className='text-[16px] font-normal leading-[27.3px] max-w-[401px] mt-4'>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </header>

      <div className='w-[548px] h-[482px] mr-10 z-[3]'>
        <Image src='/assets/pngs/trophy.png' alt='' priority unoptimized width={548} height={482} />
      </div>

      <div className='flex mt-[483px] mb-[149px]'>
        <div className='relative z-[3] pt-[111px] w-[212px] h-[296px] text-center rounded-lg border border-heliotrope bg-[rgba(212,52,254,0.12)]'>
          <Image
            alt=''
            priority
            unoptimized
            width={179}
            height={180}
            src='/assets/pngs/silver_medal.png'
            className='absolute left-1/2 -translate-x-1/2 -top-[84px]'
          />
          <p className='text-[36px] font-bold'>2nd</p>
          <p className='text-[24px] font-semibold'>Runner</p>
          <p className='text-heliotrope text-[32px] font-bold'>N300,000</p>
        </div>

        <div className='relative z-[3] bottom-[34px] pt-[149px] pb-[21px] w-[212px] h-[347px] text-center rounded-lg border border-electric-violet bg-[rgba(144,58,255,0.12)] ml-[30px] mr-[26px]'>
          <div className='w-[296px] h-[296px] absolute left-1/2 -translate-x-1/2 -top-[149px]'>
            <Image alt='' unoptimized priority fill src='/assets/pngs/gold_medal.png' />
          </div>
          <p className='text-[36px] font-bold'>1st</p>
          <p className='text-[24px] font-semibold'>Runner</p>
          <p className='text-electric-violet text-[32px] font-bold leading-[69px]'>N400,000</p>
        </div>

        <div className='relative z-[3] pt-[111px] pb-[33px] w-[212px] h-[296px] text-center rounded-lg border border-heliotrope bg-[rgba(212,52,254,0.12)]'>
          <Image
            alt=''
            priority
            unoptimized
            width={179}
            height={180}
            src='/assets/pngs/bronze_medal.png'
            className='absolute left-1/2 -translate-x-1/2 -top-[84px]'
          />
          <p className='text-[36px] font-bold'>3rd</p>
          <p className='text-[24px] font-semibold'>Runner</p>
          <p className='text-heliotrope text-[32px] font-bold'>N150,000</p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
