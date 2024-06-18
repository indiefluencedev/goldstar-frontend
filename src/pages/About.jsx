import React from 'react';
import Herocrousal from '../components/about/Herocrousal.jsx'
import Abouttext from '../components/about/Abouttext.jsx';
import FeatureSection from '../components/about/Features.jsx';
import CategoryGrid from '../components/about/Categoriesgrid.jsx'
import CustomCarousel from '../components/about/Popular.jsx'
import ProgressComponent from '../components/about/ProgressComponent.jsx';

const About = () => {
    return (
        <>
            <Herocrousal />
            <Abouttext />
            <CustomCarousel/>
            <FeatureSection />
            <CategoryGrid />
            <ProgressComponent/>

        </>
    );
};

export default About;
