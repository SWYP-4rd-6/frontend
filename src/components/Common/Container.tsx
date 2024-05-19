import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import useScrollStore from '@/store/scrollStore';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrolling, setScrolling, hasScroll, setHasScrolling } = useScrollStore();
  const container = containerRef?.current;

  const checkScroll = () => {
    const height = container?.scrollHeight;
    const dHeight = document.documentElement.scrollHeight;

    if (height && dHeight) {
      const has = height > dHeight;
      console.log(has);
      setHasScrolling(has);
    }
    setScrolling(true);
  };

  const handleScroll = () => {
    setScrolling(false);
  };

  const handleScrollEnd = () => {
    setScrolling(false);
  };

  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args: any[]) => {
      if (typeof args[0] === 'string' && /defaultProps/.test(args[0])) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);
  useEffect(() => {
    const container = containerRef?.current;

    checkScroll();

    if (container) {
      //  container.addEventListener('scroll', handleScroll);
      container.addEventListener('scroll', checkScroll); // 스크롤 이벤트 발생 시 스크롤 상태 확인
      container.addEventListener('scrollend', handleScrollEnd);

      window.addEventListener('resize', checkScroll); // 창 크기 변경 시 스크롤 상태 확인
    }
    return () => {
      if (container) {
        // container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('scroll', checkScroll);
        container.addEventListener('scrollend', handleScrollEnd);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative container-shadow shadow-2xl bg-white w-full sm:max-w-[26.875rem] h-screen 2xl:h-[58.25rem] overflow-y-scroll overflow-x-hidden left-0 mx-auto translate-x-0 lg:left-1/2 lg:mx-0 lg:translate-x-[50px] no-scroll-bar"
    >
      {children}
    </div>
  );
};

export default Container;
