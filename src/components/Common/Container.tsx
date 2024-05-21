import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
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

  return (
    <div
      className="relative container-shadow shadow-2xl bg-white w-full overflow-y-scroll overflow-x-hidden no-scroll-bar 
    h-screen  max-w-[26.875rem] 
    xs:max-w-[26.875rem] left-0 mx-auto translate-x-0 lg:left-1/2 lg:mx-0 xl:translate-x-[6rem] 2xl:translate-x-[15rem]"
    >
      {children}
    </div>
  );
};

export default Container;
