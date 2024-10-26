import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ProgressComponent.css';

import Tshirt from '../../assets/usecase/tshirt-icon.png';
import bag from '../../assets/usecase/bag-icon.png';
import paints from '../../assets/usecase/trouser-icon.png';
import jens from '../../assets/usecase/jeans-icon.png';
import Shirt from '../../assets/usecase/shirt-icon.png';

import Usecase1 from '../../assets/usecase/tshirts.png';
import Usecase2 from '../../assets/usecase/bag.png';
import Usecase3 from '../../assets/usecase/trouser.png';
import Usecase4 from '../../assets/usecase/jeans.png';
import Usecase5 from '../../assets/usecase/shirt.png';

import MetaTag from '../../utils/meta';
import { metaData } from '../../utils/metaData';

const contentData = [
  {
    image: Usecase1,
    icon: Tshirt,
    tagname: "T-SHIRT",
  },
  {
    image: Usecase2,
    icon: bag,
    tagname: "BAG",
  },
  {
    image: Usecase3,
    icon: paints,
    tagname: "TROUSER",
  },
  {
    image: Usecase4,
    icon: jens,
    tagname: "JEANS",
  },
  {
    image: Usecase5,
    icon: Shirt,
    tagname: "SHIRT",
  },
];

const ProgressComponent = () => {
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newProgress = currentIndex * (100 / (contentData.length - 1));
    setProgress(newProgress);
  
  }, [currentIndex]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  const currentContent = contentData[currentIndex];

  return (
    <>
      <MetaTag title={metaData.usecases.title} />
      <div className="pt-[120px]"></div>
      <div className="max-w-[1200px] mb-12 h-auto rounded-md bg-white items-center mx-auto">
        <h2 className="font-assistant font-bold text-[24px] mt-3 text-prime text-center md:text-[36px] mb-3">
          Use Case
        </h2>
        <hr className="border border-prime max-w-[1100px] mx-auto" />
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

            <div className="flex flex-col md:flex-col">
              {contentData.map((content, index) => (
                <div key={index} className="flex w-[150px] items-center m-1 md:m-2 button-container">
                  <button
                    onClick={() => handleButtonClick(index)}
                    className={`p-1 md:p-2 flex rounded-full border-2 ${currentIndex === index ? 'bg-prime bg-opacity-40' : 'bg-white'
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
                  <p className="button-text ml-1 text-left text-[20px]">{content.tagname}</p>
                </div>
              ))}
            </div>
          </div>
          <SwitchTransition>
            <CSSTransition key={currentIndex} timeout={300} classNames="fade">
              <div className="flex flex-col items-center md:items-start md:flex-col">
                <div className="mb-5 md:mb-0 md:mr-5">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="xs:w-[300px] xs:h-[300px] md:w-[700px] md:h-[600px]"
                  />
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
