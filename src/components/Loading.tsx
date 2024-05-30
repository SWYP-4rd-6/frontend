import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin mb-4"></div>
      <div>Loading ...</div>
    </div>
  );
};

export default Loading;
