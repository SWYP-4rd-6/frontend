import React, { FC, ReactNode } from 'react';
import FloatingButton from '@/components/FloatingButton';

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative bg-white max-w-md h-screen overflow-y-scroll overflow-x-hidden left-0 mx-auto translate-x-0 shadow-2xl lg:left-1/2 lg:mx-0 lg:translate-x-[50px] no-scroll-bar">
    {children}
  </div>
);

export default Container;
