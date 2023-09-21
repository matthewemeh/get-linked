import Link from 'next/link';

interface Props {
  extraClasses?: string;
}

const Socials: React.FC<Props> = ({ extraClasses }) => {
  return (
    <div className={`flex items-center ${extraClasses}`}>
      <Link
        href='/'
        className='w-6 h-6 inline-block mr-[19px] bg-[url(/assets/svgs/instagram.svg)] bg-no-repeat'
      />
      <Link
        href='/'
        className='w-[19px] h-[17px] inline-block mr-4 bg-[url(/assets/svgs/x.svg)] bg-no-repeat'
      />
      <Link
        href='/'
        className='w-[10.5px] h-5 inline-block mr-[16.5px] bg-[url(/assets/svgs/facebook.svg)] bg-no-repeat'
      />
      <Link
        href='/'
        className='w-6 h-6 inline-block bg-[url(/assets/svgs/linkedin.svg)] bg-no-repeat'
      />
    </div>
  );
};
export default Socials;
