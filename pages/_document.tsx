import Image from 'next/image';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      className='scroll-smooth m-0 outline-0 p-0 list-none no-underline box-border cursor-default'>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Igniting a Revolution in HR Innovation' />
      </Head>

      <body className='text-white bg-haiti leading-[normal]'>
        <Image
          alt=''
          priority
          width={1086}
          height={836}
          className='absolute -z-10'
          src='/assets/svgs/purple-lens-flare-1.svg'
        />
        <Image
          alt=''
          priority
          width={951}
          height={994}
          className='absolute -z-10 right-0'
          src='/assets/svgs/purple-lens-flare-2.svg'
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
