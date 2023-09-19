import Image from 'next/image';

const RulesSection = () => {
  return (
    <section>
      <section className='relative h-[620px] pb-7 pl-[12.8vw] pr-[6vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)]'>
        <Image
          alt=''
          priority
          width={26}
          height={32}
          src='/assets/svgs/star-white.svg'
          className='absolute top-[405px] left-[47vw] -z-[1]'
        />

        <Image
          alt=''
          priority
          width={1037}
          height={948}
          src='/assets/svgs/purple-lens-flare-3.svg'
          className='absolute -top-60 left-0 -z-[2]'
        />

        <Image
          alt=''
          priority
          width={404}
          height={959}
          src='/assets/svgs/purple-lens-flare-4.svg'
          className='absolute top-[39px] right-0 -z-[2]'
        />

        <Image
          alt=''
          priority
          width={21}
          height={25}
          src='/assets/svgs/star.svg'
          className='absolute top-[145px] left-[30.5vw] z-[1]'
        />

        <div className='max-w-[464px]'>
          <h2 className='font-clash-display text-[32px] font-bold'>
            Rules and
            <span className='block text-heliotrope'>Guidelines</span>
          </h2>

          <p className='text-[14px] font-normal leading-[27.5px] mt-4'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day:
            to shape the future. Whether you're a coding genius, a design maverick, or a concept
            wizard, you'll have the chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating solutions that can change
            the world, that's what we're all about!
          </p>
        </div>

        <Image
          priority
          width={664}
          height={664}
          alt='a woman sitting'
          src='/assets/pngs/woman-sitting.png'
        />
      </section>
    </section>
  );
};

export default RulesSection;
