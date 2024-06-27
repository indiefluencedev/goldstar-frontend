import React, { useEffect, useState } from 'react';
import './css/LockstitchD.css'; // Ensure this file contains your custom styles

// Dummy images for example purposes
import Image1 from './featuredimage/feature1.png';
import Image2 from './featuredimage/feature2.png';
import Image3 from './featuredimage/feature3.png';
import Image4 from './featuredimage/feature4.png';

import ImageA1 from './featuredimage/featureA1.jpeg';
import ImageA2 from './featuredimage/featureA2.jpeg';
import ImageA3 from './featuredimage/featureA3.jpeg';
import ImageA4 from './featuredimage/featureA4.jpg';
import ImageA5 from './featuredimage/featureA5.jpeg';

import ImageB1 from './featuredimage/featureB1.png';
import ImageB2 from './featuredimage/featureB2.jpg';

import ImageC1 from './featuredimage/featureC1.jpeg';
import ImageC2 from './featuredimage/featureC2.jpeg';
import ImageC3 from './featuredimage/featureC3.jpeg';
import ImageC4 from './featuredimage/featureC4.jpeg';
import ImageC5 from './featuredimage/featureC5.jpeg';
import ImageC6 from './featuredimage/featureC6.jpeg';
import ImageC7 from './featuredimage/featureC7.jpeg';

import ImageD1 from './featuredimage/feature D1.jpg';
import ImageD2 from './featuredimage/Feature D2.jpg'
import ImageD3 from './featuredimage/Feature D3.png';
import ImageD4 from './featuredimage/Feature D4.png';
import ImageD5 from './featuredimage/Feature D5.png';
import ImageD6 from './featuredimage/Feature D6.png';

// Import JSON data
import data from './data.json';

// Map image paths to imported images
const images = {
  "feature1.png": Image1,
  "feature2.png": Image2,
  "feature3.png": Image3,
  "feature4.png": Image4,

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





};

const LockstitchD = ({ modelName }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Find the model group that includes the given modelName
    const modelGroup = data.modelGroups.find(group =>
      group.modelNames.includes(modelName)
    );

    // Set features based on the found model group
    if (modelGroup) {
      setFeatures(modelGroup.content);
    } else {
      setFeatures([]);
    }
  }, [modelName]);

  return (
    <div className="lockstitch-container mt-5 mx-auto max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
      {features.map((feature, index) => (
        <div className={`feature-section diagonal-section mb-6`} key={index}>
          <img src={images[feature.image]} alt={feature.title} className="feature-image" />
          <div className="feature-content">
            <h2 className="feature-title">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LockstitchD;
