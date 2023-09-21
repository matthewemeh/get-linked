import Image from 'next/image';

import TimelineItem from '../TimelineItem';

const Timeline = () => {
  return (
    <section id='timeline' className='relative pt-[72px] min-h-[1700px]'>
      <header className='text-center'>
        <p className='font-clash-display text-[32px] font-bold'>Timeline</p>
        <p className='mt-3 max-w-[346px] mx-auto text-[14px] font-normal leading-6'>
          Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      </header>

      <Image
        alt=''
        priority
        width={30}
        height={36}
        src='/assets/svgs/star-purple.svg'
        className='absolute left-[23vw] top-[250px]'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-white.svg'
        className='absolute right-[20vw] top-[755px]'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute left-[8vw] top-[1420px]'
      />

      <main className='mt-[171px] flex flex-col items-center justify-center'>
        <TimelineItem
          index={1}
          date='November 18, 2023'
          title='Hackathon Announcement'
          subtitle='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
        />

        <TimelineItem
          reversed
          index={2}
          extraClasses='mt-40'
          date='November 18, 2023'
          title='Team Registration begins'
          subtitle='Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
        />

        <TimelineItem
          index={3}
          extraClasses='mt-40'
          date='November 18, 2023'
          title='Team Registration ends'
          subtitle='Interested Participants are no longer allowed to register'
        />

        <TimelineItem
          reversed
          index={4}
          extraClasses='mt-40'
          date='November 18, 2023'
          title='Announcement of the accepted teams and ideas'
          subtitle='All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
        />

        <TimelineItem
          index={5}
          extraClasses='mt-40'
          date='November 18, 2023'
          title='Getlinked Hackathon 1.0 Offically Begins'
          subtitle='Accepted teams can now proceed to build their ground breaking skill driven solutions'
        />

        <TimelineItem
          reversed
          index={6}
          extraClasses='mt-40'
          date='November 18, 2023'
          title='Demo Day'
          subtitle='Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
        />
      </main>
    </section>
  );
};

export default Timeline;
