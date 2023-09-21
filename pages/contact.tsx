import Socials from '../components/Socials';

const contact = () => {
  return (
    <main className='flex justify-between pl-[13.194vw] pr-[14.44vw]'>
      <div className='text-[16px] font-normal'>
        <header className='text-heliotrope font-clash-display text-[32px] font-semibold'>
          Get in Touch
        </header>
        <p className='mt-[17px] max-w-[96px]'>Contact Information</p>
        <address className='not-italic mt-[17px] max-w-[119px]'>
          27,Alara Street Yaba 100012 Lagos State
        </address>
        <p className='mt-[21px]'>Call Us : 07067981819</p>
        <p className='mt-[22px] max-w-[272px]'>We are open from Monday-Friday 08:00am - 05:00pm</p>

        <div className='mt-[35px] text-heliotrope leading-[normal]'>
          <p>Share on</p>
          <Socials extraClasses='mt-3.5' />
        </div>
      </div>
    </main>
  );
};

export default contact;
