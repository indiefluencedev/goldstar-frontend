import React from 'react';

const HomePageSkeleton = () => {
  return (
    <>
      {/* Home Banner */}
      <div className="h-[80vh] bg-gray-300 animate-pulse mb-10"></div>

      {/* About Section */}
      <div className="p-6 mb-10 mx-auto bg-white rounded-lg shadow-lg animate-pulse">
    <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-wrap justify-around">
            <div className="w-1/2 p-2">
                <div className="h-72 bg-prime rounded mb-4"></div>
            </div>
            <div className="w-1/2 p-2">
                <div className="h-72 bg-prime rounded mb-4"></div>
            </div>
            <div className="w-1/2 p-2">
                <div className="h-72 bg-prime rounded mb-4"></div>
            </div>
            <div className="w-1/2 p-2">
                <div className="h-72 bg-prime rounded mb-4"></div>
            </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
            <div className="h-8 bg-prime rounded-full w-32 mb-4"></div>
            <div className="h-4 bg-prime rounded-full mb-4 w-3/4"></div>
            <div className="h-4 bg-prime rounded-full mb-4 w-full"></div>
            <div className="h-4 bg-prime rounded-full mb-4 w-2/3"></div>
            <div className="h-4 bg-prime rounded-full w-1/2"></div>
       
        
        <div className="ml-4 h-8 bg-prime rounded-full w-32 mt-8 mb-4"></div>
        <div className="ml-4 h-4 bg-prime rounded-full mb-4 w-3/4"></div>
        <div className="ml-4 h-4 bg-prime rounded-full mb-4 w-full"></div>
        <div className="ml-4 h-4 bg-prime rounded-full mb-4 w-2/3"></div>
        <div className="ml-4 h-4 bg-prime rounded-full w-1/2"></div>
    
  
        <div className=" ml-4 h-8 bg-prime rounded-full w-32 mt-8 mb-4"></div>
        <div className=" ml-4 h-4 bg-prime rounded-full mb-4 w-3/4"></div>
        <div className=" ml-4 h-4 bg-prime rounded-full mb-4 w-full"></div>
        <div className=" ml-4 h-4 bg-prime rounded-full mb-4 w-2/3"></div>
        <div className=" ml-4 h-4 bg-prime rounded-full w-1/2"></div>
    </div>
 
    </div>
  
</div>



      {/* Popular Products Section */}
      <div className="p-6 mt-10 mb-10 max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg animate-pulse">
        <div className="h-14 bg-prime rounded-full w-44 mb-10"></div>
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[300px]  bg-gray-300 rounded h-[400px] mb-4"></div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="p-6 mb-10  mx-auto bg-white rounded-lg shadow-lg animate-pulse">
        <div className="h-10 bg-prime rounded-full mx-auto w-32 mb-11"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1240px] mx-auto gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 border h-96 border-gray-200 rounded shadow animate-pulse">
              <div className="flex items-center w-16 mx-auto justify-center h-16 bg-gray-300 rounded-full mb-4"></div>
              <div className="h-4 bg-prime rounded-full mb-4 w-3/4 mx-auto"></div>
              <div className="h-4 bg-prime rounded-full mb-2 w-full"></div>
              <div className="h-4 bg-prime rounded-full w-2/3 mx-auto"></div>

              <div className="h-4 bg-prime rounded-full mb-4 w-3/4 mx-auto"></div>
              <div className="h-4 bg-prime rounded-full mb-2 w-full"></div>
              <div className="h-4 bg-prime rounded-full w-2/3 mx-auto"></div>
              <div className="h-4 bg-prime rounded-full mb-4 w-3/4 mx-auto"></div>
              <div className="h-4 bg-prime rounded-full mb-2 w-full"></div>
              <div className="h-4 bg-prime rounded-full w-2/3 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Section */}
      <div className="p-6 mb-10 max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg animate-pulse">
        <div className="h-6 bg-prime rounded-full w-32 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full bg-gray-300 rounded h-48 mb-4"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePageSkeleton;
