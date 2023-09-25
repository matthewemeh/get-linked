import Head from 'next/head';

import FAQs from '../components/sections/FAQs';
import Terms from '../components/sections/Terms';
import Prizes from '../components/sections/Prizes';
import Footer from '../components/sections/Footer';
import HeroSection from '../components/sections/Hero';
import Criteria from '../components/sections/Criteria';
import Timeline from '../components/sections/Timeline';
import Partners from '../components/sections/Partners';
import RulesSection from '../components/sections/Rules';
import IntroductionSection from '../components/sections/Introduction';

const Home = () => {
  return (
    <>
      <Head>
        <title>Get Linked</title>
      </Head>

      <main className='overflow-hidden'>
        <HeroSection />
        <IntroductionSection />
        <RulesSection />
        <Criteria />
        <FAQs />
        <Timeline />
        <Prizes />
        <Partners />
        <Terms />
        <Footer />
      </main>
    </>
  );
};

export default Home;
