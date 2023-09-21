import Image from 'next/image';

import Button from '../Button';
import CriteriaListItem from '../CriteriaListItem';

const Criteria = () => {
  return (
    <section className='relative pl-[4.6vw] pb-[200px] pr-[8vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)]'>
      <Image
        alt=''
        priority
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-6.svg'
        className='absolute top-[200px] left-0 -z-2'
      />

      <Image
        alt=''
        priority
        width={620}
        height={948}
        src='/assets/svgs/purple-lens-flare-5.svg'
        className='absolute top-[570px] -right-0 -z-2'
      />

      <Image
        alt=''
        priority
        width={30}
        height={36}
        src='/assets/svgs/star-purple.svg'
        className='absolute left-[15.2vw] top-[84px] -z-1'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-grey.svg'
        className='absolute left-[32vw] top-[510px] -z-1'
      />

      <Image
        alt=''
        priority
        width={26}
        height={32}
        src='/assets/svgs/star-white.svg'
        className='absolute left-[49vw] top-[765px] -z-1'
      />

      <div className='relative mt-[215px] w-[710px] h-[587px] before:-top-9 before:left-[13%] before:-z-1 before:absolute before:bg-[url(/assets/svgs/ellipse.svg)] before:w-[134px] before:h-[134px]'>
        <Image
          priority
          width={710}
          height={587}
          alt='people discussing'
          className='w-full h-full'
          src='/assets/pngs/discussing.png'
        />
      </div>

      <div className='max-w-[564px] mt-[70px]'>
        <h4 className='font-clash-display text-[32px] font-bold'>
          Judging Criteria
          <span className='block text-heliotrope'>Key attributes</span>
        </h4>

        <ul className='mt-[21px]'>
          <CriteriaListItem
            title='Innovation and Creativity'
            description='Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
          />

          <CriteriaListItem
            title='Functionality'
            extraClasses='mt-[22px]'
            description='Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
          />

          <CriteriaListItem
            extraClasses='mt-[27px]'
            title='Impact and Relevance'
            description='Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
          />

          <CriteriaListItem
            extraClasses='mt-[23px]'
            title='Technical Complexity'
            description='Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
          />

          <CriteriaListItem
            extraClasses='mt-7'
            title='Adherence to Hackathon Rules'
            description='Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
          />
        </ul>

        <Button title='Read More' extraClasses='mt-8' href='/' />
      </div>
    </section>
  );
};

export default Criteria;
