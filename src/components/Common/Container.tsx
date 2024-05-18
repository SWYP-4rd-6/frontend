import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import FloatingButton from '@/components/Button/FloatingButton';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import useScrollStore from '@/store/scrollStore';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrolling, setScrolling } = useScrollStore();

  const handleScroll = () => {
    setScrolling(true);
  };

  const handleScrollEnd = () => {
    //const container = containerRef.current;
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
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('scrollend', handleScrollEnd);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        container.addEventListener('scrollend', handleScrollEnd);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      //sm:h-[58.25rem]
      className="relative container-shadow shadow-2xl bg-white w-full sm:max-w-[26.875rem] h-screen 2xl:h-[58.25rem] overflow-y-scroll overflow-x-hidden left-0 mx-auto translate-x-0 lg:left-1/2 lg:mx-0 lg:translate-x-[50px] no-scroll-bar"
    >
      {children}
    </div>
  );
};

export default Container;
