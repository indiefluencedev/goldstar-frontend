import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/LockstitchD.css'; // Ensure this file contains your custom styles

// Dummy images for example purposes
import Image1 from '../../assets/featuredimage/feature1.webp';
import Image2 from '../../assets/featuredimage/feature2.webp';
import Image3 from '../../assets/featuredimage/feature3.webp';
import Image4 from '../../assets/featuredimage/feature4.webp';

import Image1D1 from '../../assets/featuredimage/feature1d1.webp';
import Image2D1 from '../../assets/featuredimage/feature2d1.webp';
import Image3D1 from '../../assets/featuredimage/feature3d1.webp';
import Image4D1 from '../../assets/featuredimage/feature4d1.webp';
import Image5D1 from '../../assets/featuredimage/feature5d1.webp';

import Image1D2 from '../../assets/featuredimage/feature1d2.webp';
import Image2D2 from '../../assets/featuredimage/feature2d2.webp';
import Image3D2 from '../../assets/featuredimage/feature3d2.webp';
import Image4D2 from '../../assets/featuredimage/feature4d2.webp';
import Image5D2 from '../../assets/featuredimage/feature5d2.webp';
import Image6D2 from '../../assets/featuredimage/feature6d2.webp';
import Image7D2 from '../../assets/featuredimage/feature7d2.webp';
import Image8D2 from '../../assets/featuredimage/feature8d2.webp';


import ImageA1 from '../../assets/featuredimage/featurea1.webp';
import ImageA2 from '../../assets/featuredimage/featurea2.webp';
import ImageA3 from '../../assets/featuredimage/featurea3.webp';
import ImageA4 from '../../assets/featuredimage/featurea4.webp';
import ImageA5 from '../../assets/featuredimage/featurea5.webp';

import ImageB1 from '../../assets/featuredimage/featureb1.webp';
import ImageB2 from '../../assets/featuredimage/featureb2.webp';

import ImageC1 from '../../assets/featuredimage/featurec1.webp';
import ImageC2 from '../../assets/featuredimage/featurec2.webp';
import ImageC3 from '../../assets/featuredimage/featurec3.webp';
import ImageC4 from '../../assets/featuredimage/featurec4.webp';
import ImageC5 from '../../assets/featuredimage/featurec5.webp';
import ImageC6 from '../../assets/featuredimage/featurec6.webp';
import ImageC7 from '../../assets/featuredimage/featurec7.webp';

import ImageD1 from '../../assets/featuredimage/featured1.webp';
import ImageD2 from '../../assets/featuredimage/featured2.webp';
import ImageD3 from '../../assets/featuredimage/featured3.webp';
import ImageD4 from '../../assets/featuredimage/featured4.webp';
import ImageD5 from '../../assets/featuredimage/featured5.webp';
import ImageD6 from '../../assets/featuredimage/featured6.webp';

import ImageE1 from '../../assets/featuredimage/featuree1.webp';
import ImageE2 from '../../assets/featuredimage/featuree2.webp';
import ImageE3 from '../../assets/featuredimage/featuree3.webp';
import ImageE4 from '../../assets/featuredimage/featuree4.webp';

import ImageF1 from '../../assets/featuredimage/featuref1.webp';
import ImageF2 from '../../assets/featuredimage/featuref2.webp';
import ImageF3 from '../../assets/featuredimage/featuref3.webp';
import ImageF4 from '../../assets/featuredimage/featuref4.webp';
import ImageF5 from '../../assets/featuredimage/featuref5.webp';

import ImageG1 from '../../assets/featuredimage/featureg1.webp';
import ImageG2 from '../../assets/featuredimage/featureg2.webp';
import ImageG3 from '../../assets/featuredimage/featureg3.webp';
import ImageG4 from '../../assets/featuredimage/featureg4.webp';
import ImageG5 from '../../assets/featuredimage/featureg5.webp';

// Import JSON data
import data from './data.json';

// Map image paths to imported images
const images = {
  "feature1.png": Image1,
  "feature2.png": Image2,
  "feature3.png": Image3,
  "feature4.png": Image4,
  "feature1D1.png": Image1D1,
  "feature2D1.png": Image2D1,
  "feature3D1.png": Image3D1,
  "feature4D1.png": Image4D1,
  "feature5D1.png": Image5D1,
  "feature1D2.png": Image1D2,
  "feature2D2.png": Image2D2,
  "feature3D2.png": Image3D2,
  "feature4D2.png": Image4D2,
  "feature5D2.png": Image5D2,
  "feature6D2.png": Image6D2,
  "feature7D2.png": Image7D2,
  "feature8D2.png": Image8D2,
  
  "featureA1.png": ImageA1,
  "featureA2.png": ImageA2,
  "featureA3.png": ImageA3,
  "featureA4.png": ImageA4,
  "featureA5.png": ImageA5,
  "featureB1.png": ImageB1,
  "featureB2.png": ImageB2,
  "featureC1.png": ImageC1,
  "featureC2.png": ImageC2,
  "featureC3.png": ImageC3,
  "featureC4.png": ImageC4,
  "featureC5.png": ImageC5,
  "featureC6.png": ImageC6,
  "featureC7.png": ImageC7,
  "featureD1.png": ImageD1,
  "featureD2.png": ImageD2,
  "featureD3.png": ImageD3,
  "featureD4.png": ImageD4,
  "featureD5.png": ImageD5,
  "featureD6.png": ImageD6,
  "featureE1.png": ImageE1,
  "featureE2.png": ImageE2,
  "featureE3.png": ImageE3,
  "featureE4.png": ImageE4,
  "featureF1.png": ImageF1,
  "featureF2.png": ImageF2,
  "featureF3.png": ImageF3,
  "featureF4.png": ImageF4,
  "featureF5.png": ImageF5,
  "featureG1.png": ImageG1,
  "featureG2.png": ImageG2,
  "featureG3.png": ImageG3,
  "featureG4.png": ImageG4,
  "featureG5.png": ImageG5,
};

const LockstitchD = ({ modelName }) => {
  const { i18n } = useTranslation();
  const [features, setFeatures] = useState([]);
  const [isModelFound, setIsModelFound] = useState(false);

  useEffect(() => {
    // Find the model group that includes the given modelName
    const modelGroup = data.modelGroups.find(group =>
      group.modelNames.includes(modelName)
    );

    // Set features based on the found model group
    if (modelGroup) {
      setFeatures(modelGroup.content);
      setIsModelFound(true); // Set model found to true
    } else {
      setFeatures([]);
      setIsModelFound(false); // Set model found to false
    }
  }, [modelName]);

  const getCurrentLanguage = () => i18n.language || window.localStorage.i18nextLng || 'en';

  // Only render the component if the model is found
  if (!isModelFound) {
    return null;
  }

  return (
    <div className="lockstitch-container mt-5 mx-auto max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
      {features.map((feature, index) => (
        <div className={`feature-section diagonal-section mb-6`} key={index}>
          <img src={images[feature.image]} alt={feature.title[getCurrentLanguage()]} className="feature-image" />
          <div className="feature-content">
            <h2 className="feature-title">{feature.title[getCurrentLanguage()]}</h2>
            <p>{feature.description[getCurrentLanguage()]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LockstitchD;