import Image from 'next/image';

import ButtonLink from '../ButtonLink';
import StarGrey from '../stars/StarGrey';
import StarWhite from '../stars/StarWhite';
import StarPurple from '../stars/StarPurple';
import CriteriaListItem from '../CriteriaListItem';

const Criteria = () => {
  return (
    <section className='relative pl-[4.6vw] pb-[200px] pr-[8vw] flex items-center justify-between border-b border-[rgba(255,255,255,0.18)] phones:flex-col phones:px-[8.7vw] phones:pb-[58.65px]'>
      <Image
        alt=''
        priority
        unoptimized
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-6.svg'
        className='absolute top-[217px] -left-[10.07vw] -z-2 phones:hidden'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={1037}
        height={948}
        src='/assets/svgs/purple-lens-flare-5.svg'
        className='absolute top-[223px] -right-[28.96vw] -z-2 phones:hidden'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={404}
        height={444}
        src='/assets/svgs/mobile-purple-lens-flare-4.svg'
        className='absolute -z-10 top-[74px] right-0 w-screen hidden phones:block'
      />

      <Image
        alt=''
        priority
        unoptimized
        width={252}
        height={444}
        src='/assets/svgs/mobile-purple-lens-flare-5.svg'
        className='absolute -z-10 -bottom-[47px] -right-[4.36vw] hidden phones:block'
      />

      <StarPurple left='15.2vw' top={84} extraClasses='phones:hidden' />
      <StarGrey left='32vw' top={221} extraClasses='phones:hidden' />
      <StarWhite left='49vw' top={765} extraClasses='phones:hidden' />

      {/* mobile view stars */}
      <StarPurple
        top={15}
        width={13}
        height={17}
        left='44.36vw'
        extraClasses='hidden phones:block'
      />
      <StarGrey
        top={510}
        width={12}
        height={14}
        right='42.564vw'
        extraClasses='hidden phones:block'
      />
      <StarWhite
        width={10}
        height={12}
        bottom={76}
        right='12.82vw'
        extraClasses='hidden phones:block'
      />

      <div className='relative mt-[215px] w-[710px] h-[587px] before:-top-9 before:left-[13%] before:-z-1 before:absolute before:bg-[url(/assets/svgs/ellipse.svg)] before:w-[134px] before:h-[134px] phones:before:hidden phones:w-[85.13vw] phones:h-[275px] phones:mt-[74px]'>
        <Image
          priority
          unoptimized
          width={710}
          height={587}
          alt='people discussing'
          className='w-full h-full'
          src='/assets/pngs/discussing.png'
        />
      </div>

      <div className='max-w-[564px] mt-[70px] phones:text-center'>
        <h4 className='font-clash-display text-[32px] font-bold phones:text-[20px] phones:leading-[26.6px]'>
          Judging Criteria
          <span className='block text-heliotrope'>Key attributes</span>
        </h4>

        <ul className='mt-[21px] phones:mt-4'>
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

        <ButtonLink
          href='/'
          title='Read More'
          extraClasses='mt-8 phones:mx-auto phones:mt-6 phones:!text-[12px] phones:!w-[96.35px] phones:!h-[31.35px]'
        />
      </div>
    </section>
  );
};

export default Criteria;
