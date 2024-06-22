import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ProgressComponent.css';
import Shirt from '../../assets/svg/shirt.svg';
import Usecase1 from '../../assets/svg/usecase1.svg';
import Usecase2 from '../../assets/svg/usecase2.svg';
import Usecase3 from '../../assets/svg/usecase3.svg';

const contentData = [
  {
    image: Usecase1,
    icon: Shirt,
  },
  {
    image: Usecase2,
    icon: Shirt,
  },
  {
    image: Usecase3,
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
  }
  
];
const MobileProgress = () => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newProgress = (currentIndex / (contentData.length - 1)) * 100;
    setProgress(newProgress);
    console.log(`Progress: ${newProgress}%`); // Debugging
  }, [currentIndex]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    console.log(`Current Index: ${index}`); // Debugging
  };

  const currentContent = contentData[currentIndex];

  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <h2 className="font-assistant font-bold text-[24px] text-prime text-center md:text-left md:text-[36px] mb-3">
        Use Case
      </h2>
      <div className="max-w-6xl mx-auto p-5 flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:flex-row w-full">
          <div className="mobile-progress relative w-full h-2 bg-purple-200 rounded-lg mb-5 md:mb-0 progress-container">
            <div
              className="absolute top-0 left-0 h-2 bg-prime rounded-lg transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute top-1 left-0 transform -translate-y-1/2 w-4 h-4 bg-prime rounded-full"></div>
            <div className="absolute top-1 right-0 transform -translate-y-1/2 w-4 h-4 bg-prime rounded-full"></div>
          </div>
          <div className="flex flex-row md:flex-col justify-between">
            {contentData.map((content, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`p-2 md:p-2 m-2 md:m-2 rounded-full border-2  ${
                  currentIndex === index ? 'bg-prime bg-opacity-40' : 'bg-white'
                }`}
                style={{
                  border: '2px solid gray',
                  transition: 'background-color 0.3s, color 0.3s',
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
            <div className="flex flex-col items-center md:items-start h-[350px] md:flex-col">
              <div className="mb-5 md:mb-0 md:mr-5">
                <img src={currentContent.image} alt={currentContent.title} className="w-full h-full mt-3" />
              </div>
             
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default MobileProgress;
