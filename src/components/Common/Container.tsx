import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <div
      className="relative container-shadow shadow-2xl bg-white w-full overflow-y-scroll overflow-x-hidden no-scroll-bar 
    h-screen csize:h-[58.25rem]  max-w-[26.875rem] 
    xs:max-w-[26.875rem] left-0 mx-auto translate-x-0 lg:left-1/2 lg:mx-0 xl:translate-x-[6rem] 2xl:translate-x-[15rem]"
    >
      {children}
    </div>
  );
};

export default Container;
