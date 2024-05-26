import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-40">
      <div className="size-10 border-8 border-t-8 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      <p className="mx-4 animate-pulse">로딩중 입니다...</p>
    </div>
  );
};

export default Loading;
