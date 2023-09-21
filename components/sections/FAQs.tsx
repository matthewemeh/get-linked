import Image from 'next/image';
import FAQListItem from '../FAQListItem';

const FAQs = () => {
  return (
    <section
      id='faqs'
      className='relative pl-[14vw] pb-[63px] pr-[7vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)]'>
      <Image
        alt=''
        priority
        width={30}
        height={36}
        src='/assets/svgs/star-purple.svg'
        className='absolute left-[12vw] top-[160px]'
      />

      <Image
        alt=''
        priority
        width={30}
        height={36}
        src='/assets/svgs/star-grey.svg'
        className='absolute left-[47vw] top-[490px]'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-white.svg'
        className='absolute right-[18vw] top-[840px]'
      />

      <Image
        alt=''
        priority
        width={21}
        height={25}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute left-[52.9vw] top-[280px]'
      />

      <Image
        alt=''
        priority
        width={21}
        height={25}
        src='/assets/svgs/star-purple-gradient.svg'
        className='absolute left-[67vw] top-[80px]'
      />

      <div className='w-[427px] mt-[164px]'>
        <h5 className='font-clash-display text-[32px] font-bold'>
          Frequently Asked
          <span className='block text-heliotrope'>Questions</span>
        </h5>

        <p className='max-w-[342px] mt-4 text-[14px] font-normal leading-7'>
          We got answers to the questions that you might want to ask about&nbsp;
          <span className='font-bold'>getlinked Hackathon 1.0</span>
        </p>

        <ul className='mt-[68px] flex flex-col gap-y-[25px]'>
          <FAQListItem question='Can I work on a project I started before the hackathon?' />
          <FAQListItem question='What happens if I need help during the hackathon?' />
          <FAQListItem question="What happens if I don't have an idea for a project?" />
          <FAQListItem question='Can I join a team or do I have to come with one?' />
          <FAQListItem question='What happens after the hackathon ends' />
          <FAQListItem question='Can I work on a project I started before the hackathon?' />
        </ul>
      </div>

      <div className='relative mt-[122px] w-[741px] h-[741px]'>
        <Image
          priority
          width={741}
          height={741}
          alt='man thinking'
          className='w-full h-full'
          src='/assets/pngs/man-thinking.png'
        />

        <div className='absolute -top-[11%] left-[30%] w-[114px] h-[71px]'>
          <Image fill alt='' priority src='/assets/svgs/question-mark.svg' />
        </div>

        <div className='absolute -top-[4%] left-[51%] w-[114px] h-[71px]'>
          <Image fill alt='' priority src='/assets/svgs/question-mark.svg' />
        </div>

        <div className='absolute -top-[4%] left-[10%] w-[114px] h-[71px]'>
          <Image fill alt='' priority src='/assets/svgs/question-mark.svg' />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
