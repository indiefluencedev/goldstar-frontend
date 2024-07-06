import React, { useState, useEffect } from 'react';
import Herocrousal from '../components/about/Herocrousal.jsx';
import Abouttext from '../components/about/Abouttext.jsx';
import FeatureSection from '../components/about/Features.jsx';
import CategoryGrid from '../components/about/Categoriesgrid.jsx';
import CustomCarousel from '../components/about/Popular.jsx';
import MobileCategoryGrid from '../components/about/MobileCategoryGrid.jsx';
import MetaTag from '../utils/meta.jsx';
import { metaData } from "../utils/metaData.js";
import HomePageSkeleton from '../components/skelten/HomeSkeleton.jsx'; // Import the skeleton component

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the timeout as needed

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <HomePageSkeleton />;
    }

    return (
        <>
            <MetaTag title={metaData.home.title} description={metaData.home.description} keywords={metaData.home.keywords} imageUrl={metaData.home.imageUrl} imageAlt={metaData.home.imageAlt} />
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
