import { useEffect, useState } from 'react';

import Logo from './Logo';
import Button from './Button';
import NavLink from './NavLink';

import { addClass, removeClass } from '../public/utils';

const Navigation = () => {
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('/');

  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [scrollStatus, setScrollStatus] = useState<ScrollStatus>('not scrolling');

  const activeStyles: string[] = [
    'bg-clip-text',
    'text-transparent',
    'bg-[linear-gradient(90deg,#903AFF_3.08%,#FF26B9_93.85%)]',
  ];

  const resetNavLinks = () => {
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('#nav-link');

    navLinks.forEach((navLink: HTMLAnchorElement) => {
      removeClass(navLink, ...activeStyles);
    });
  };

  const watchSectionScroll = () => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const currentNavLinkHash: string = entry.target.id;
        const currentNavLink: HTMLAnchorElement | null = document.querySelector(
          `[href*=${currentNavLinkHash}]`
        );

        if (entry.isIntersecting) {
          resetNavLinks();
          addClass(currentNavLink, ...activeStyles);
        } else {
          removeClass(currentNavLink, ...activeStyles);
        }
      });
    });

    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');

    sections.forEach((section: HTMLElement) => {
      const targetSections: string[] = ['faqs', 'timeline', 'prizes'];

      if (targetSections.includes(section.id)) {
        observer.observe(section);
      }
    });
  };

  const watchPageScroll = () => {
    window.addEventListener(
      'scroll',
      () => {
        const scrollTopPosition: number = window.scrollY || document.documentElement.scrollTop;

        if (scrollTopPosition === 0 || scrollTopPosition === lastScrollTop) {
          setScrollStatus('not scrolling');
        } else if (scrollTopPosition > lastScrollTop) {
          setScrollStatus('scrolling down');
        } else if (scrollTopPosition < lastScrollTop) {
          setScrollStatus('scrolling up');
        }

        setLastScrollTop(scrollTopPosition <= 0 ? 0 : scrollTopPosition);
      },
      false
    );
  };

  useEffect(() => {
    const { pathname, hash }: Location = window.location;
    const newRoute = (hash || pathname) as NavigationRoute;

    setCurrentRoute(newRoute);
  });

  useEffect(watchSectionScroll, []);
  useEffect(watchPageScroll, [lastScrollTop]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    resetNavLinks();

    const currentNavLink: EventTarget & HTMLAnchorElement = e.currentTarget;
    addClass(currentNavLink, ...activeStyles);
  };

  return (
    <nav
      className={`sticky z-[9999] px-[9vw] pt-[6.5vh] pb-[25px] flex items-center justify-between ease-in-out duration-500 ${
        scrollStatus === 'scrolling down' ? 'bg-transparent -top-[120px]' : 'bg-haiti top-0'
      } ${scrollStatus === 'not scrolling' && 'bg-transparent'}`}>
      <NavLink href='/'>
        <Logo />
      </NavLink>

      <div className='text-[16px] font-normal flex items-center justify-center gap-x-[4vw]'>
        <NavLink id='nav-link' href='#timeline' isActive={currentRoute === '#timeline'}>
          Timeline
        </NavLink>

        <NavLink
          id='nav-link'
          href='/overview'
          onClick={handleNavClick}
          isActive={currentRoute === '/overview'}>
          Overview
        </NavLink>

        <NavLink id='nav-link' href='#faqs' isActive={currentRoute === '#faqs'}>
          FAQs
        </NavLink>

        <NavLink
          id='nav-link'
          href='/contact'
          onClick={handleNavClick}
          isActive={currentRoute === '/contact'}>
          Contact
        </NavLink>

        <Button href='/register' extraClasses='ml-[4.5vw]' title='Register' />
      </div>
    </nav>
  );
};

export default Navigation;
