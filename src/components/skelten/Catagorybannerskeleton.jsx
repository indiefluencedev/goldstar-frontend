import React from 'react';

const Catagorybannerskeleton = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-300 animate-pulse mb-12 ">
      <div className="absolute top-0 left-0 w-full h-full flex xs:flex-col md:flex-row items-center justify-between px-4 sm:px-8">
        <div className="space-y-4">
          <div className="h-10 bg-gray-200 rounded-full dark:bg-prime w-60 mb-4"></div>
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="xs:h-[200px] sm:h-[150px] md:h-[200px] xl:h-[300px] w-auto bg-gray-200 dark:bg-prime rounded-full"></div>
        </div>
        <div className="h-full flex items-center justify-center pt-16">
          <div className="h-[400px] w-[400px] bg-gray-200 dark:bg-prime rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Catagorybannerskeleton;
