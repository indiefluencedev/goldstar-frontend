import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ProgressComponent.css';
import Tshirt from '../../assets/svg/Tshirt.svg';
import bag from '../../assets/svg/Bag.svg';
import paints from '../../assets/svg/paints.svg';
import jens from '../../assets/svg/jens.svg';
import Shirt from '../../assets/svg/shirt.svg';
import Usecase1 from '../../assets/svg/usecase1.svg';
import Usecase2 from '../../assets/svg/usecase2.svg';
import Usecase3 from '../../assets/svg/usecase3.svg';
import Usecase4 from '../../assets/svg/usecase4.svg';
import Usecase5 from '../../assets/svg/usecase5.svg';

const contentData = [
  {
    image: Usecase1,
    icon: Tshirt,
  },
  {
    image: Usecase2,
    icon: bag,
  },
  {
    image: Usecase3,
    icon: paints,
  },
  {
    
    image: Usecase4,
    icon: jens,
  },
  {
   
    image: Usecase5,
    icon: Shirt,
  }
  
];

const ProgressComponent = () => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newProgress = currentIndex * (100 / (contentData.length - 1));
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
        <div className="flex flex-col md:flex-row items-center md:mr-5 mb-5 md:mb-0">
          {/* Desktop progress bar */}
          <div className="desktop-progress relative w-full md:w-1 h-4 md:h-[400px] bg-purple-200 rounded-lg mb-5 md:mb-0 md:mr-5 progress-container">
            <div
              className="absolute top-0 left-0 md:left-auto w-full md:w-1 bg-prime rounded-lg transition-all duration-500"
              style={{ height: `${progress}%` }}
            ></div>
            <div className="absolute left-0 md:top-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-prime rounded-full"></div>
            <div className="absolute right-0 md:bottom-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-prime rounded-full"></div>
          </div>

          {/* Mobile progress bar */}
          <div className="mobile-progress relative w-full h-4 bg-purple-200 rounded-lg mb-5 md:mb-0 progress-container">
            <div
              className="absolute top-0 left-0 w-full bg-prime rounded-lg transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute left-0 transform -translate-y-1/2 w-4 h-4 bg-prime rounded-full"></div>
            <div className="absolute right-0 transform -translate-y-1/2 w-4 h-4 bg-prime rounded-full"></div>
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
            <div className="flex flex-col items-center md:items-start md:flex-col">
              <div className="mb-5 md:mb-0 md:mr-5">
                <img src={currentContent.image} alt={currentContent.title} className="xs:w-[300px] xs:h-[300px]  md:w-[600px] md:h-[500px]" />
              </div>
             
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default ProgressComponent;
