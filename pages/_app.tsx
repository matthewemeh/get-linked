import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Navigation from '../components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <main className='font-montserrat'>
        <Navigation />
        <Component {...pageProps} />
      </main>
    </>
  );
}
