import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      className='scroll-smooth m-0 outline-0 p-0 list-none no-underline box-border cursor-default'>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link
          rel='stylesheet'
          href='https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Montserrat:wght@400;500;600;700&family=Unica+One&display=swap'
        />

        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Igniting a Revolution in HR Innovation' />
      </Head>

      <body className='text-white font-montserrat bg-haiti leading-[normal] overflow-x-hidden overflow-y-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
