import Head from 'next/head';

import HeroSection from '../components/HeroSection';
import RulesSection from '../components/RulesSection';
import IntroductionSection from '../components/IntroductionSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Linked</title>
      </Head>

      <main>
        <HeroSection />

        <IntroductionSection />

        <RulesSection />
      </main>
    </>
  );
}
