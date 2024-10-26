import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import trackPageView from '../utils/tracking.js';
import Herocrousal from '../components/about/Herocrousal.jsx';
import Abouttext from '../components/about/Abouttext.jsx';
import FeatureSection from '../components/about/Features.jsx';
import CategoryGrid from '../components/about/Categoriesgrid.jsx';
import CustomCarousel from '../components/about/Popular.jsx';
import MetaTag from '../utils/meta.jsx';
import { metaData } from "../utils/metaData.js";
import HomePageSkeleton from '../components/skelten/HomeSkeleton.jsx'; // Import the skeleton component


const About = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        trackPageView("/", "Home Page");
    }, []);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the timeout as needed

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (loading) {
        return <HomePageSkeleton />;
    }

    return (
        <>
            <MetaTag 
                title={metaData.home.title} 
                description={metaData.home.description} 
                keywords={metaData.home.keywords} 
                imageUrl={metaData.home.imageUrl} 
                imageAlt={metaData.home.imageAlt} 
            />
            <Herocrousal />
            <Abouttext />
            <CustomCarousel />
            <FeatureSection />
            <CategoryGrid />
        </>
    );
};

export default About;
