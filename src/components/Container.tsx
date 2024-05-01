import React, { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-white max-w-md h-screen relative left-0 mx-auto translate-x-0 shadow-2xl lg:left-1/2 lg:mx-0 lg:translate-x-[50px] overflow-y-scroll">
    {children}
  </div>
);

export default Container;
