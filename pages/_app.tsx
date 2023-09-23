import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';

import '../styles/globals.css';

import Navigation from '../components/Navigation';

import { addClass } from '../public/utils';

const MOBILE_BREAKPOINT = 600;
const LAPTOP_BREAKPOINT = 1024;
const SMALL_MOBILE_BREAKPOINT = 400;

export const AppContext = createContext<AppContextData>({
  screenWidth: 0,
  screenHeight: 0,
  currentRoute: '/',
  LAPTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  SMALL_MOBILE_BREAKPOINT,
});

export default function App({ Component, pageProps }: AppProps) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('/');

  const updateNavOnReload = () => {
    const { pathname, hash }: Location = window.location;
    const newRoute = pathname.concat(hash) as NavigationRoute;

    setCurrentRoute(newRoute);
  };

  const watchHeadingScroll = () => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const currentElement: Element = entry.target;

        if (entry.isIntersecting) {
          if (currentElement.classList.contains('anime-left')) {
            addClass(currentElement, 'animate-fade-left');
          }
          if (currentElement.classList.contains('anime-fade')) {
            addClass(currentElement, 'animate-fade-in');
          }
        }
      });
    });

    const headings: NodeListOf<HTMLElement> = document.querySelectorAll('.anime');

    headings.forEach((heading: HTMLElement) => {
      observer.observe(heading);
    });
  };

  useEffect(updateNavOnReload);

  useEffect(() => {
    // get window's available width and height

    setScreenWidth(window.screen.availWidth);
    setScreenHeight(window.screen.availHeight);

    window.addEventListener('resize', () => {
      setScreenWidth(window.screen.availWidth);
      setScreenHeight(window.screen.availHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.screen.availWidth);
        setScreenHeight(window.screen.availHeight);
      });
    };
  }, []);

  useEffect(() => {
    if (screenWidth > MOBILE_BREAKPOINT) {
      watchHeadingScroll();
    }
  }, [screenWidth]);

  return (
    <AppContext.Provider
      value={{
        screenWidth,
        currentRoute,
        screenHeight,
        LAPTOP_BREAKPOINT,
        MOBILE_BREAKPOINT,
        SMALL_MOBILE_BREAKPOINT,
      }}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <main>
        <Navigation />
        <Component {...pageProps} />
        <div
          id='alert'
          style={{ bottom: '-150px' }}
          className='fixed left-1/2 -translate-x-1/2 w-max max-w-[80vw] p-4 bg-transparent text-white mb-8 tracking-[0.04em] rounded-md text-[1rem] transition-all duration-500 ease-in-out text-center'
        />
      </main>
    </AppContext.Provider>
  );
}
