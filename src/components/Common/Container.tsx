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
      className="relative container-shadow shadow-2xl bg-white w-full overflow-y-scroll overflow-x-hidden no-scroll-bar 
      max-h-[45rem] h-md:max-h-[58.25rem] max-w-[26.875rem]
      xs:max-w-[26.875rem] left-0 mx-auto translate-x-0 lg:left-1/2 lg:mx-0 xl:translate-x-[6rem] 2xl:translate-x-[15rem]"
    >
      {children}
    </div>
  );
};

export default Container;
