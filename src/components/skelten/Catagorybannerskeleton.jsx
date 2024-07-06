import React from 'react';

const Catagorybannerskeleton = () => {
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(
        <div key={i} className="p-4 border w-[320px] h-[450px] border-prime rounded shadow animate-pulse">
          <div className="flex items-center justify-center w-[280px] h-[280px] mb-4 bg-gray-300 rounded">
            <svg className="w-10 h-10 text-prime" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            </svg>
          </div>
          <div className="h-2 bg-prime rounded-full mb-2.5"></div>
          <div className="h-2 bg-prime rounded-full mb-6"></div>
          <div className="h-12 bg-prime rounded-sm mt-6"></div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
      <div className="relative w-full h-[400px] bg-gray-300 animate-pulse mb-12 ">
        <div className="absolute top-0 left-0 w-full h-full flex xs:flex-col md:flex-row items-center justify-between px-4 sm:px-8">
          <div className="space-y-4">
            <div className="h-10 bg-prime rounded-full dark:bg-prime w-60 mb-4"></div>
          </div>
          <div className="h-full flex items-center justify-center">
            <div className="xs:h-[200px] sm:h-[150px] md:h-[200px] xl:h-[300px] w-auto bg-prime dark:bg-prime rounded-full"></div>
          </div>
          <div className="h-full flex items-center justify-center pt-16">
            <div className="h-[300px] w-[300px] bg-prime dark:bg-prime rounded-lg"></div>
          </div>
        </div>
      </div>
<div className='max-w-[1280px] mx-auto mb-6' >
      <div className="h-12 w-[250px] bg-prime rounded-lg mt-6"></div>
      </div>
      <div className='max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {renderCards()}
      </div>
    </div>
  );
};

export default Catagorybannerskeleton;
