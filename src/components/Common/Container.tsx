import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import FloatingButton from '@/components/FloatingButton';
import useScrollStore from '@/scrollStore';

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
      className="relative bg-white max-w-md h-screen overflow-y-scroll overflow-x-hidden left-0 mx-auto translate-x-0 shadow-2xl lg:left-1/2 lg:mx-0 lg:translate-x-[50px] no-scroll-bar"
    >
      {children}
    </div>
  );
};

export default Container;
