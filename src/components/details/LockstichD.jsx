import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './css/LockstitchD.css'; // Ensure this file contains your custom styles

// Dummy images for example purposes
import Image1 from '../../assets/featuredimage/feature1.jpg';
import Image2 from '../../assets/featuredimage/feature2.jpg';
import Image3 from '../../assets/featuredimage/feature3.jpg';
import Image4 from '../../assets/featuredimage/feature4.jpg';

import Image1D1 from '../../assets/featuredimage/feature1D1.png';
import Image2D1 from '../../assets/featuredimage/feature2D1.png';
import Image3D1 from '../../assets/featuredimage/feature3D1.png';
import Image4D1 from '../../assets/featuredimage/feature4D1.jpg';
import Image5D1 from '../../assets/featuredimage/feature5D1.jpg';

import Image1D2 from '../../assets/featuredimage/feature1D2.jpg';
import Image2D2 from '../../assets/featuredimage/feature2D2.jpg';
import Image3D2 from '../../assets/featuredimage/feature3D2.jpg';
import Image4D2 from '../../assets/featuredimage/feature4D2.jpg';
import Image5D2 from '../../assets/featuredimage/feature5D2.jpg';
import Image6D2 from '../../assets/featuredimage/feature6D2.jpg';
import Image7D2 from '../../assets/featuredimage/feature7D2.png';
import Image8D2 from '../../assets/featuredimage/feature8D2.png';


import ImageA1 from '../../assets/featuredimage/featureA1.jpeg';
import ImageA2 from '../../assets/featuredimage/featureA2.jpeg';
import ImageA3 from '../../assets/featuredimage/featureA3.jpeg';
import ImageA4 from '../../assets/featuredimage/featureA4.jpg';
import ImageA5 from '../../assets/featuredimage/featureA5.jpeg';

import ImageB1 from '../../assets/featuredimage/featureB1.png';
import ImageB2 from '../../assets/featuredimage/featureB2.jpg';

import ImageC1 from '../../assets/featuredimage/featureC1.jpeg';
import ImageC2 from '../../assets/featuredimage/featureC2.jpeg';
import ImageC3 from '../../assets/featuredimage/featureC3.jpeg';
import ImageC4 from '../../assets/featuredimage/featureC4.jpeg';
import ImageC5 from '../../assets/featuredimage/featureC5.jpeg';
import ImageC6 from '../../assets/featuredimage/featureC6.jpeg';
import ImageC7 from '../../assets/featuredimage/featureC7.jpeg';

import ImageD1 from '../../assets/featuredimage/feature D1.jpg';
import ImageD2 from '../../assets/featuredimage/Feature D2.jpg';
import ImageD3 from '../../assets/featuredimage/Feature D3.png';
import ImageD4 from '../../assets/featuredimage/Feature D4.png';
import ImageD5 from '../../assets/featuredimage/Feature D5.png';
import ImageD6 from '../../assets/featuredimage/Feature D6.png';

import ImageE1 from '../../assets/featuredimage/featureE1.png';
import ImageE2 from '../../assets/featuredimage/featureE2.png';
import ImageE3 from '../../assets/featuredimage/featureE3.png';
import ImageE4 from '../../assets/featuredimage/featureE4.png';

import ImageF1 from '../../assets/featuredimage/featureF1.jpg';
import ImageF2 from '../../assets/featuredimage/featureF2.jpg';
import ImageF3 from '../../assets/featuredimage/featureF3.jpg';
import ImageF4 from '../../assets/featuredimage/featureF4.jpg';
import ImageF5 from '../../assets/featuredimage/featureF5.jpg';

import ImageG1 from '../../assets/featuredimage/featureG1.jpg';
import ImageG2 from '../../assets/featuredimage/featureG2.jpg';
import ImageG3 from '../../assets/featuredimage/featureG3.jpg';
import ImageG4 from '../../assets/featuredimage/featureG4.jpg';
import ImageG5 from '../../assets/featuredimage/featureG5.jpg';

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