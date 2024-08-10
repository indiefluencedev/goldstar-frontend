import React from 'react';

const Catagorybannerskeleton = () => {
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 8; i++) {
      cards.push(
        <div key={i} style={cardStyle} className="animate-pulse">
          <div style={imageContainerStyle} className="mb-4">
            <svg style={svgStyle} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
            </svg>
          </div>
          <div style={lineStyle} className="mb-2.5"></div>
          <div style={lineStyle} className="mb-6"></div>
          <div style={bigLineStyle} className="mt-6"></div>
        </div>
      );
    }
    return cards;
  };

  const containerStyle = {
    maxWidth: '1380px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '1rem',
  };

  const cardStyle = {
    padding: '1rem',
    border: '1px solid #d1d5db',
    width: '320px',
    height: '450px',
    borderColor: '#544484',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '280px',
    height: '280px',
    backgroundColor: '#e5e7eb',
    borderRadius: '0.5rem',
  };

  const svgStyle = {
    width: '2.5rem',
    height: '2.5rem',
    color: '#544484',
  };

  const lineStyle = {
    height: '0.5rem',
    backgroundColor: '#544484',
    borderRadius: '9999px',
  };

  const bigLineStyle = {
    height: '3rem',
    backgroundColor: '#544484',
    borderRadius: '0.375rem',
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
      <div style={{ maxWidth: '1280px', margin: '0 auto 1.5rem' }}>
        <div className="h-12 w-[250px] bg-prime rounded-lg mt-6"></div>
      </div>
      <div style={containerStyle}>
        {renderCards()}
      </div>
    </div>
  );
};

export default Catagorybannerskeleton;
