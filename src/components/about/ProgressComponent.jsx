import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ProgressComponent.css';
import Shirt from '../../assets/svg/shirt.svg';

const contentData = [
  {
    title: 'GS 62G',
    series: 'Heavy Duty Series',
    description: 'Direct drive crank arm 4 needle 6 thread sewing machine',
    image: 'path_to_your_image/sewing_machine.png',
    icon: Shirt,
  },
  {
    title: 'GS 63G',
    series: 'Heavy Duty Series',
    description: 'Direct drive crank arm 4 needle 5 thread sewing machine',
    image: 'path_to_your_image/sewing_machine2.png',
    icon: Shirt,
  },
  {
    title: 'GS 64G',
    series: 'Heavy Duty Series',
    description: 'Direct drive crank arm 3 needle 6 thread sewing machine',
    image: 'path_to_your_image/sewing_machine3.png',
    icon: Shirt,
  },
  {
    title: 'GS 65G',
    series: 'Heavy Duty Series',
    description: 'Direct drive crank arm 4 needle 6 thread sewing machine with advanced features',
    image: 'path_to_your_image/sewing_machine4.png',
    icon: Shirt,
  },
  {
    title: 'GS 66G',
    series: 'Heavy Duty Series',
    description: 'Direct drive crank arm 2 needle 4 thread sewing machine',
    image: 'path_to_your_image/sewing_machine5.png',
    icon: Shirt,
  },
  {
    title: 'GS 67G',
    series: 'Heavy Duty Series',
    description: 'Direct drive crank arm 5 needle 6 thread sewing machine with additional features',
    image: 'path_to_your_image/sewing_machine6.png',
    icon: Shirt,
  },
];

const ProgressComponent = () => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setProgress(currentIndex * (100 / (contentData.length - 1)));
  }, [currentIndex]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  const currentContent = contentData[currentIndex];

  // width: `${progress}%`,

  return (
    <>
      <div className="max-w-[1240px] mx-auto mt-10">
        <h2 className="font-assistant font-bold text-[24px] text-prime text-center md:text-left md:text-[36px] mb-3">
          Use Case
        </h2>
        <div className="max-w-6xl mx-auto p-5 flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:flex-row items-center md:mr-5 mb-5 md:mb-0">
            <div className="relative w-full md:w-1 h-4 md:h-[450px] bg-purple-200 rounded-lg mb-5 md:mb-0 md:mr-5 progress-container">
              <div
                className="absolute top-0 left-0 md:left-auto w-full md:w-1 bg-prime rounded-lg transition-all duration-500"
                style={{  height: `${progress}%` }}
              ></div>


              
              <div className="absolute left-0 md:top-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-prime rounded-full"></div>
              <div className="absolute right-0 md:bottom-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-prime rounded-full"></div>
            </div>
            <div className="flex flex-row md:flex-col justify-between">
              {contentData.map((content, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={`p-1 md:p-2 m-1 md:m-2 rounded-full border-2 ${
                    currentIndex === index ? 'bg-prime bg-opacity-40' : 'bg-white'
                  }`}
                  style={{
                    border: '2px solid gray',
                    transition: 'background-color 0.3s, color 0.3s'
                  }}
                >
                  <img
                    src={content.icon}
                    alt={`Step ${index + 1}`}
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
          <SwitchTransition>
            <CSSTransition key={currentIndex} timeout={300} classNames="fade">
              <div className="flex flex-col items-center md:items-start md:flex-col">
                <div className="mb-5 md:mb-0 md:mr-5">
                  <img src={currentContent.image} alt={currentContent.title} className="w-72" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{currentContent.title}</h2>
                  <p className="text-lg mt-2">Series: {currentContent.series}</p>
                  <p className="mt-2">{currentContent.description}</p>
                  <button className="mt-5 py-2 px-4 bg-prime text-white rounded-lg">SEE PRODUCT</button>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  );
};

export default ProgressComponent;
