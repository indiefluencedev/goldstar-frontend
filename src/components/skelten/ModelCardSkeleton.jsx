import React from 'react';

const ModelCardSkeleton = () => {
  return (
    <div className='pt-28' >
    <div className="p-6 max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg animate-pulse">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[550px] h-[500px] bg-prime rounded flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </svg>
        </div>
        <div className="w-full lg:w-[600px] text-left lg:ml-12 mt-4 lg:mt-0">
          <div className=" bg-prime rounded-full w-60 h-12 mb-4"></div>
          <div className="h-4 bg-prime rounded-full mb-4"></div>
          <div className="h-4 bg-prime rounded-full mb-4"></div>
          <div className="border-t border-gray-300 rounded-lg overflow-hidden mb-4">
            <div className="py-2 px-4 font-semibold bg-prime bg-opacity-50 h-6"></div>
            <div className="py-2 px-4 bg-prime bg-opacity-25 h-6"></div>
            <div className="py-2 px-4 bg-prime bg-opacity-25 h-6"></div>
            <div className="py-2 px-4 bg-prime bg-opacity-25 h-6"></div>
            <div className="py-2 px-4 bg-prime bg-opacity-25 h-6"></div>
            <div className="py-2 px-4 bg-white h-6"></div>
          </div>
          <div className="h-10 bg-prime rounded-full w-48 mb-4"></div>
        </div>
      </div>
    </div>





    <div className="p-6 max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg animate-puls  mt-8">

    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
   
   <div className="w-[600px] mr-[200px]">
       <div className="h-2.5 bg-prime rounded-full dark:bg-prime w-48 mb-4"></div>
       <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[480px] mb-2.5"></div>
       <div className="h-2 bg-prime rounded-full dark:bg-prime mb-2.5"></div>
       <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[440px] mb-2.5"></div>
       <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[460px] mb-2.5"></div>
       <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[360px]"></div>
   </div>

   <div className="flex items-center justify-center w-full h-80 bg-gray-300 rounded sm:w-96 dark:bg-prime">
       <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
           <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
       </svg>
   </div>
   <span className="sr-only">Loading...</span>
</div>


    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div className="flex items-center justify-center  w-full h-80 bg-gray-300 rounded sm:w-96 dark:bg-prime mr-[200px]">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div className="w-[600px] ">
        <div className="h-2.5 bg-prime rounded-full dark:bg-prime w-48 mb-4"></div>
        <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-prime rounded-full dark:bg-prime mb-2.5"></div>
        <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-prime rounded-full dark:bg-prime max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

</div>



<div className="p-6 mt-6 max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg animate-pulse">
      {/* About this item section */}
      <div className="px-10 mt-6">
        <div className="h-6 bg-prime rounded-full w-48 mb-4"></div>
        <div className="h-4 bg-prime rounded-full mb-4 w-3/4"></div>
        <div className="h-4 bg-prime rounded-full mb-4 w-full"></div>
        <div className="h-4 bg-prime rounded-full mb-4 w-2/3"></div>
        <div className="h-4 bg-prime rounded-full w-1/2"></div>
      </div>

      {/* Model Details section */}
      <div className="px-10 mt-6">
        <div className="h-6 bg-prime rounded-full w-48 mb-4"></div>
        <div className="flex mt-6 flex-col md:flex-row items-center justify-between mb-8">
          <div className="w-full lg:w-1/4 hidden lg:block">
            <div className="mt-[-10px] border-t mr-3 border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <div className="scrollable-content">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className={`h-12 px-4 flex items-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                    <div className="h-4 bg-prime rounded-full w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex lg:w-3/4 w-full overflow-x-auto">
            <div className="flex flex-nowrap space-x-4">
              {[...Array(2)].map((_, colIndex) => (
                <div key={colIndex} className="w-[330px] lg:w-[350px] mb-4 border border-gray-300 rounded-lg">
                  {[...Array(6)].map((_, rowIndex) => (
                    <div key={rowIndex} className={`h-12 px-4 flex items-center justify-center ${rowIndex % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                      <div className="h-4 bg-prime rounded-full w-full"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

   
    </div>
  );
};

export default ModelCardSkeleton;
