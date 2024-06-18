import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import jeans from '../assets/png/jeans.png';
import bags from '../assets/png/BAGS.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    jeans,
    bags,
    '/docs/images/carousel/carousel-3.svg',
    '/docs/images/carousel/carousel-4.svg',
    '/docs/images/carousel/carousel-5.svg',
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className='h-[80vh] pt-[150px]'>
        <div id="default-carousel" className="relative w-full max-w-[1240px] mx-auto" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute block w-full h-full transition duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                data-carousel-item
              >
                <img src={slide} className="absolute w-full h-full object-contain" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-[-100px] left-1/2 space-x-3 rtl:space-x-reverse">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-10 h-10 rounded-full flex items-center justify-center ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => handleDotClick(index)}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h4M8 11h4M9 17H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-2M8 15h8m-4 4v-4" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
