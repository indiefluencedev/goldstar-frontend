import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import lockstitchImage from '../../assets/svg/Lock.svg';
import overlockImage from '../../assets/svg/Overlock.svg';
import interlockImage from '../../assets/svg/Interlock.svg';
import heavyDutyImage from '../../assets/svg/HeavyDuty.svg';
import specialImage from '../../assets/svg/Special.svg';
import zigzagImage from '../../assets/svg/Zigzag.svg';
import cuttingImage from '../../assets/svg/Cutting.svg';
import Cuttingmachine from '../../assets/png/cuttingmachineseries.png';
import Fusion from '../../assets/png/fusion.png';
import Heattransfer from '../../assets/png/heattransfer.png';
import Needledetector from '../../assets/png/needledetector.png';
import { getSeries } from '../../services/api';

const images = {
    lockstitch: lockstitchImage,
    overlock: overlockImage,
    interlock: interlockImage,
    heavyduty: heavyDutyImage,
    specialseries: specialImage,
    zigzag: zigzagImage,
    cuttingseries: cuttingImage,
    cuttingmachine: Cuttingmachine,
    fusingmachine: Fusion,
    heattransfer: Heattransfer,
    needledetector: Needledetector
};

const Loader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite'
        }}></div>
        <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

const MobileCategoryGrid = () => {
    const { t, i18n } = useTranslation();
    const [seriesNames, setSeriesNames] = useState({});
    const [loading, setLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSeriesNames = async () => {
            try {
                const response = await getSeries();
                const seriesData = response.reduce((acc, series) => {
                    acc[series.modelType.toLowerCase()] = series;
                    return acc;
                }, {});
                setSeriesNames(seriesData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching series names:', error);
                setLoading(false);
            }
        };

        fetchSeriesNames();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target); // Stop observing once it's in view
                }
            },
            {
                threshold: 0.2, // Trigger when 20% of the component is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleCardClick = (seriesId, imageUrl) => {
        navigate(`/categories/${seriesId}`, { state: { imageUrl } });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    return (
        <div id='grid' className="sm:hidden bg-544484 bg-opacity-5 py-6 sm:py-8 lg:py-12 font-assistant">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                    <h2 className="block w-full bg-gradient-to-b from-prime to-gray-700 bg-clip-text font-assistant font-bold text-transparent text-3xl sm:text-4xl">
                    {t('category')}
                    </h2>
                    </div>
                </div>
                <motion.div
                    className="grid grid-cols-1 gap-4"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    ref={sectionRef}
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        Object.keys(seriesNames).map((key) => (
                            <div
                                key={key}
                                onClick={() => handleCardClick(seriesNames[key]?._id, images[key])}
                                className="group relative border border-prime border-opacity-45 flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-60 mt-4"
                            >
                                <img
                                    src={images[key]}
                                    className="absolute inset-0 h-[200px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10 mt-2"
                                    alt={`${seriesNames[key]?.name} Series`}
                                />
                                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div> */}
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                <p className="block w-full bg-gradient-to-b from-prime to-gray-700 bg-clip-text font-assistant font-bold text-transparent text-xl ">
                                        {t(seriesNames[key]?.name) || `${key} Series`}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MobileCategoryGrid;
