import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Herocrousal from '../components/about/Herocrousal.jsx';
import Abouttext from '../components/about/Abouttext.jsx';
import FeatureSection from '../components/about/Features.jsx';
import CategoryGrid from '../components/about/Categoriesgrid.jsx';
import CustomCarousel from '../components/about/Popular.jsx';
import MetaTag from '../utils/meta.jsx';
import { metaData } from "../utils/metaData.js";
import HomePageSkeleton from '../components/skelten/HomeSkeleton.jsx'; // Import the skeleton component
import useWindowSize from '../hooks/useWindowSize'; // Import custom hook for screen size

const MobileCategoryGrid = lazy(() => import('../components/about/MobileCategoryGrid.jsx'));
const MobileAboutText = lazy(() => import('../components/about/Mobileabout.jsx'));

const About = () => {
    const [loading, setLoading] = useState(true);
    const { width } = useWindowSize();
    const location = useLocation();
    const navigate = useNavigate();
    const [prevPath, setPrevPath] = useState(null);

    useEffect(() => {
        // Check if the user navigated back from the categories page
        if (prevPath === '/categories') {
            window.location.reload();
        } else {
            // Simulate loading time
            const timer = setTimeout(() => {
                setLoading(false);
            }, 3000); // Adjust the timeout as needed

            return () => clearTimeout(timer);
        }

        setPrevPath(location.pathname);
    }, [location.pathname, prevPath]);

    if (loading) {
        return <HomePageSkeleton />;
    }

    return (
        <>
            <MetaTag title={metaData.home.title} description={metaData.home.description} keywords={metaData.home.keywords} imageUrl={metaData.home.imageUrl} imageAlt={metaData.home.imageAlt} />
            <Herocrousal />
            
            <div className="hidden md:block">
                <Abouttext />
            </div>
            {width < 768 && (
                <Suspense fallback={<HomePageSkeleton />}>
                    <MobileAboutText />
                </Suspense>
            )}
            
            <CustomCarousel />
            <FeatureSection />
            
            <div className="hidden md:block">
                <CategoryGrid />
            </div>
            {width < 768 && (
                <Suspense fallback={<HomePageSkeleton />}>
                    <MobileCategoryGrid />
                </Suspense>
            )}
        </>
    );
};

export default About;
