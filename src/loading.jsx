import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-auto mt-5">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute w-12 h-12 bg-blue-500 rounded-full opacity-75 animate-ping"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-white animate-pulse">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
