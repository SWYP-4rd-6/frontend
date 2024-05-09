import React, { useState, useEffect } from 'react';
import { MaterialSymbol } from 'react-material-symbols';
import useScrollStore from '@/scrollStore';

const FloatingButton = () => {
  const { scrolling } = useScrollStore();

  return (
    <button
      className={` z-50 sticky bottom-28 left-full mx-6 rounded-full bg-signature  font-black text-xl text-white duration-200 transition-width ease-in-out h-16 px-4 overflow-hidden whitespace-nowrap ${scrolling ? 'w-16' : 'w-48 '}`}
    >
      <MaterialSymbol className="align-middle" icon="add" size={28} fill grade={30} color="white" />
      {!scrolling && '여행 등록하기'}
    </button>
  );
};

export default FloatingButton;
