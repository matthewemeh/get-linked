import Image from 'next/image';

import FAQListItem from '../FAQListItem';
import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';
import StarPurpleGradient from '../stars/StarPurpleGradient';

const FAQs = () => {
  return (
    <section
      id='faqs'
      className='relative pl-[14vw] pb-[63px] pr-[7vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)] phones:flex-col phones:pt-[60px] phones:pb-[49px] phones:px-[11.8vw]'>
      <StarWhite left='12vw' top={160} extraClasses='phones:hidden' />
      <StarGrey width={30} height={36} left='47vw' top={490} extraClasses='phones:hidden' />
      <StarWhite right='18vw' top={840} extraClasses='phones:hidden' />
      <StarPurpleGradient left='52.9vw' top={280} extraClasses='phones:hidden' />
      <StarPurpleGradient left='67vw' top={80} extraClasses='phones:hidden' />

      {/* mobile stars view */}
      <StarPurpleGradient
        top={47}
        width={18}
        height={22}
        left='15.13vw'
        extraClasses='hidden phones:block'
      />
      <StarPurpleGradient
        width={10}
        height={10}
        bottom={376}
        left='47.69vw'
        extraClasses='hidden phones:block'
      />
      <StarPurpleGradient
        width={7}
        height={9}
        bottom={267}
        left='25.128vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey
        width={10}
        height={12}
        bottom={206}
        left='12.82vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        width={16}
        height={20}
        bottom={44}
        right='23.59vw'
        extraClasses='hidden phones:block'
      />

      <div className='w-[427px] mt-[164px] phones:text-center phones:mt-0 phones:w-[unset]'>
        <h5 className='font-clash-display text-[32px] font-bold phones:text-[20px] phones:leading-[26.6px]'>
          Frequently Asked
          <span className='block text-heliotrope'>Questions</span>
        </h5>

        <p className='max-w-[342px] mt-4 text-[14px] font-normal leading-[27.5px] phones:mt-1.5 phones:text-[12px] phones:w-full phones:max-w-[unset]'>
          We got answers to the questions that you might want to ask about&nbsp;
          <span className='font-bold'>getlinked Hackathon 1.0</span>
        </p>

        <ul className='mt-[68px] flex flex-col gap-y-[25px] phones:mt-[45.69px] phones:gap-y-[17.6px]'>
          <FAQListItem question='Can I work on a project I started before the hackathon?' />
          <FAQListItem question='What happens if I need help during the hackathon?' />
          <FAQListItem question="What happens if I don't have an idea for a project?" />
          <FAQListItem question='Can I join a team or do I have to come with one?' />
          <FAQListItem question='What happens after the hackathon ends' />
          <FAQListItem question='Can I work on a project I started before the hackathon?' />
        </ul>
      </div>

      <div className='relative mt-[122px] w-[741px] h-[741px] phones:w-full phones:h-full phones:mt-[86px]'>
        <Image
          priority
          unoptimized
          width={741}
          height={741}
          alt='man thinking'
          className='w-full h-full'
          src='/assets/pngs/man-thinking.png'
        />

        <div className='absolute -top-[4%] left-[10%] w-[114px] h-[71px] phones:w-[50px] phones:h-8'>
          <Image fill alt='' priority src='/assets/svgs/question-mark.svg' />
        </div>

        <div className='absolute -top-[11%] left-[30%] w-[114px] h-[71px] phones:w-[50px] phones:h-[31px]'>
          <Image fill alt='' priority src='/assets/svgs/question-mark.svg' />
        </div>

        <div className='absolute -top-[4%] left-[51%] w-[114px] h-[71px] phones:w-[50px] phones:h-8'>
          <Image fill alt='' priority src='/assets/svgs/question-mark.svg' />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
