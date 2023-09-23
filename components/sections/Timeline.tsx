import { useContext } from 'react';

import StarGrey from '../stars/StarGrey';
import TimelineItem from '../TimelineItem';
import StarWhite from '../stars/StarWhite';
import StarPurple from '../stars/StarPurple';

import { AppContext } from '../../pages/_app';

const Timeline = () => {
  const { screenWidth }: AppContextData = useContext(AppContext);

  return (
    <section
      id='timeline'
      className='relative pt-[72px] min-h-[1700px] phones:pt-20 phones:px-[12vw] phones:pb-[73.68px] phones:min-h-[unset]'>
      <header className='text-center'>
        <p className='font-clash-display text-[32px] font-bold phones:text-[20px] phones:leading-[26.6px]'>
          Timeline
        </p>
        <p className='mt-3 max-w-[346px] mx-auto text-[14px] font-normal leading-6 phones:mt-[18px]'>
          Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
      </header>

      <StarPurple top={250} left='23vw' extraClasses='phones:hidden' />
      <StarWhite top={755} right='20vw' extraClasses='phones:hidden' />
      <StarGrey top={1420} left='8vw' extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarPurple
        top={188}
        width={14}
        height={16}
        left='21.03vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        top={568}
        width={10}
        height={12}
        right='24.36vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey
        width={10}
        height={12}
        bottom={34}
        left='5.64vw'
        extraClasses='hidden phones:block'
      />

      <main className='mt-[171px] flex flex-col items-center justify-center phones:gap-y-[27px] phones:relative phones:mt-14'>
        <TimelineItem
          index={1}
          date='November 18, 2023'
          screenWidth={screenWidth}
          title='Hackathon Announcement'
          subtitle='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
        />

        <TimelineItem
          reversed
          index={2}
          date='November 18, 2023'
          screenWidth={screenWidth}
          title='Team Registration begins'
          extraClasses='mt-40 phones:mt-0'
          subtitle='Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'
        />

        <TimelineItem
          index={3}
          date='November 18, 2023'
          screenWidth={screenWidth}
          title='Team Registration ends'
          extraClasses='mt-40 phones:mt-0'
          subtitle='Interested Participants are no longer allowed to register'
        />

        <TimelineItem
          reversed
          index={4}
          date='November 18, 2023'
          screenWidth={screenWidth}
          extraClasses='mt-40 phones:mt-0'
          title='Announcement of the accepted teams and ideas'
          subtitle='All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'
        />

        <TimelineItem
          index={5}
          date='November 18, 2023'
          screenWidth={screenWidth}
          extraClasses='mt-40 phones:mt-0'
          title='Getlinked Hackathon 1.0 Offically Begins'
          subtitle='Accepted teams can now proceed to build their ground breaking skill driven solutions'
        />

        <TimelineItem
          reversed
          index={6}
          title='Demo Day'
          date='November 18, 2023'
          screenWidth={screenWidth}
          extraClasses='mt-40 phones:mt-0'
          subtitle='Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'
        />
      </main>
    </section>
  );
};

export default Timeline;
