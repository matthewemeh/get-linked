import { useContext, useEffect, useMemo, useState } from 'react';

import Logo from './Logo';
import NavLink from './NavLink';
import ButtonLink from './ButtonLink';
import CloseButton from './CloseButton';

import { AppContext } from '../pages/_app';
import { addClass, removeClass } from '../public/utils';
import Overlay from './Overlay';

const Navigation = () => {
  const [mobileNavOpened, setMobileNavOpened] = useState<boolean>(false);
  const { currentRoute, screenWidth, MOBILE_BREAKPOINT } = useContext(AppContext);
  const showNav: boolean = useMemo(() => {
    return !(
      (currentRoute === '/contact' || currentRoute === '/register') &&
      screenWidth < MOBILE_BREAKPOINT
    );
  }, [currentRoute, screenWidth]);

  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [scrollStatus, setScrollStatus] = useState<ScrollStatus>();

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

        resetNavLinks();
        if (entry.isIntersecting) {
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

        if (scrollTopPosition > lastScrollTop) {
          setScrollStatus('scrolling down');
        } else if (scrollTopPosition < lastScrollTop) {
          setScrollStatus('scrolling up');
        }

        setLastScrollTop(scrollTopPosition <= 0 ? 0 : scrollTopPosition);
      },
      false
    );
  };

  useEffect(watchSectionScroll, []);

  useEffect(watchPageScroll, [lastScrollTop]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    resetNavLinks();

    const currentNavLink: EventTarget & HTMLAnchorElement = e.currentTarget;
    addClass(currentNavLink, ...activeStyles);
  };

  return (
    <nav
      className={`sticky z-[9999] px-[9vw] pt-[6.5vh] pb-[25px] flex items-center justify-between ease-in-out duration-500 phones:py-7 phones:px-[12.308vw] ${
        showNav || 'hidden'
      } ${
        scrollStatus
          ? scrollStatus === 'scrolling down'
            ? 'bg-transparent -top-[120px]'
            : 'bg-haiti top-0'
          : 'bg-transparent'
      }`}>
      <Overlay visible={mobileNavOpened} onClick={() => setMobileNavOpened(false)} />

      <NavLink href='/'>
        <Logo />
      </NavLink>

      <div
        className={`text-[16px] font-normal flex items-center justify-center gap-y-5 gap-x-[4vw] duration-400 phones:fixed phones:top-0 phones:flex-col phones:pt-10 phones:text-[18px] phones:font-medium phones:-tracking-[1px] phones:bg-haiti phones:rounded-lg phones:border-[0.5px] phones:border-[rgba(255,255,255,0.04)] phones:backdrop-blur-[30px] phones:w-[348px] phones:h-[492px] phones:pl-[40px] phones:items-start phones:justify-start phones:z-20 ${
          mobileNavOpened ? 'right-0' : '-right-[100vw]'
        }`}>
        <CloseButton extraClasses='ml-auto mr-[45px]' onClick={() => setMobileNavOpened(false)} />

        <NavLink
          id='nav-link'
          href='/#timeline'
          extraClasses='phones:mt-[30px]'
          isActive={currentRoute === '/#timeline'}
          onClick={() => setMobileNavOpened(false)}>
          Timeline
        </NavLink>

        <NavLink
          id='nav-link'
          href='/#top'
          onClick={e => {
            handleNavClick(e);
            setMobileNavOpened(false);
          }}
          isActive={currentRoute === '/#top' || currentRoute === '/'}>
          Overview
        </NavLink>

        <NavLink
          id='nav-link'
          href='/#faqs'
          isActive={currentRoute === '/#faqs'}
          onClick={() => setMobileNavOpened(false)}>
          FAQs
        </NavLink>

        <NavLink
          id='nav-link'
          href='/contact'
          onClick={e => {
            handleNavClick(e);
            setMobileNavOpened(false);
          }}
          isActive={currentRoute === '/contact'}>
          Contact
        </NavLink>

        <ButtonLink
          title='Register'
          href='/register'
          isActive={currentRoute === '/register'}
          onClick={() => setMobileNavOpened(false)}
          extraClasses='ml-[4.5vw] phones:ml-0 phones:!text-[16px] phones:!w-[172px] phones:!h-[53px]'
        />
      </div>

      <button
        onClick={() => setMobileNavOpened(true)}
        className='bg-[url(/assets/svgs/hamburger-menu.svg)] bg-center bg-no-repeat w-[19px] h-3.5 hidden phones:block'
      />
    </nav>
  );
};

export default Navigation;
