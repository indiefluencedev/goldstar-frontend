import React from 'react';
import Herocrousal from '../components/about/Herocrousal.jsx';
import Abouttext from '../components/about/Abouttext.jsx';
import FeatureSection from '../components/about/Features.jsx';
import CategoryGrid from '../components/about/Categoriesgrid.jsx';
import CustomCarousel from '../components/about/Popular.jsx';
import MobileCategoryGrid from '../components/about/MobileCategoryGrid.jsx';
// import ProgressComponent from '../components/about/ProgressComponent.jsx';
// import MobileProgress from '../components/about/MobileProgress.jsx';

const About = () => {
    return (
        <>
            <Herocrousal />
            <Abouttext />
            <CustomCarousel />
            <FeatureSection />
           

            <div className="hidden md:block">
            <CategoryGrid />
            </div>
            <div className="block md:hidden">
               <MobileCategoryGrid />
            </div>
        </>
    );
};

export default About;
