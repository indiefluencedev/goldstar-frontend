import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getSeries } from '../../services/api';
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

const points = {
    lockstitch: ['Integrated Direct Drive Motor', 'Advanced LCD Interface', 'Automated Sewing Features'],
    overlock: ['Intelligent Fabric Identification System', 'Direct Drive Servo Motor', 'Multiple Sewing Modes'],
    interlock: ['High-Speed Direct Drive', 'Automatic Functionalities', 'Specialized Machine Beds'],
    heavyduty: ['Quiet and Smooth Operation', 'Robust Design for Heavy-Duty Use', 'Top and Bottom Feed Mechanism'],
    specialseries: ['High-Speed Performance', 'Versatility in Button Attachment', 'Large Machine Cavity'],
    zigzag: ['Versatility in Material and Application', 'Sophisticated Control System', 'Dynamic Feeding Mechanism'],
    cuttingseries: ['Advanced Cutting Features', 'Specialized Capabilities', 'Powerful and Quiet Operation'],
    cuttingmachine: ['High-Quality and Fully Automated Cutting', 'Versatility Across Industries', 'Specialization for Tough Materials'],
    fusingmachine: ['Belt Warping Prevention System', 'Enhanced Durability of Electrical Components', 'Rotary Strip Off Device'],
    heattransfer: ['Advanced Temperature Control', 'Integrated Heating Technology', 'Ergonomic and Efficient Design'],
    needledetector: ['Advanced Detection Technology', 'High-Performance Processing', 'Energy Efficiency and Safety Features']
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

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const CategoryGrid = () => {
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

    return (
        <div className="bg-544484 bg-opacity-5 sm:h-[2800px] md:h-[1600px] py-6 sm:py-8 lg:py-12 font-assistant">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Category</h2>
                    </div>
                </div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8"
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    ref={sectionRef}
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <div
                                onClick={() => handleCardClick(seriesNames.lockstitch?._id, images.lockstitch)}
                                className="group relative border border-prime border-opacity-45 flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.lockstitch}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Lockstitch Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.lockstitch.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.lockstitch?.name || 'Lockstitch Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.overlock?._id, images.overlock)}
                                className="border border-prime border-opacity-45 group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.overlock}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Overlock Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.overlock.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.overlock?.name || 'Overlock Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.interlock?._id, images.interlock)}
                                className="border border-prime border-opacity-45 group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.interlock}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Interlock Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.interlock.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.interlock?.name || 'Interlock Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.heattransfer?._id, images.heattransfer)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64 col-span-2"
                            >
                                <img
                                    src={images.heattransfer}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Heat Transfer"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.heattransfer.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.heattransfer?.name || 'Heat Transfer'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.needledetector?._id, images.needledetector)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64 col-span-2"
                            >
                                <img
                                    src={images.needledetector}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Needle Detector"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.needledetector.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.needledetector?.name || 'Needle Detector'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.specialseries?._id, images.specialseries)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.specialseries}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Special Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.specialseries.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.specialseries?.name || 'Special Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.zigzag?._id, images.zigzag)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.zigzag}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Zigzag Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.zigzag.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.zigzag?.name || 'Zigzag Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.heavyduty?._id, images.heavyduty)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64 col-span-2"
                            >
                                <img
                                    src={images.heavyduty}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Heavy Duty Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.heavyduty.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.heavyduty?.name || 'Heavy Duty Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.cuttingseries?._id, images.cuttingseries)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.cuttingseries}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Cutting Series"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.cuttingseries.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.cuttingseries?.name || 'Cutting Series'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.cuttingmachine?._id, images.cuttingmachine)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64 col-span-2"
                            >
                                <img
                                    src={images.cuttingmachine}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Cutting Machine"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.cuttingmachine.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.cuttingmachine?.name || 'Cutting Machine'}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => handleCardClick(seriesNames.fusingmachine?._id, images.fusingmachine)}
                                className="group border border-prime border-opacity-45 relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer h-64"
                            >
                                <img
                                    src={images.fusingmachine}
                                    className="absolute inset-0 h-[210px] w-full object-contain object-center transition duration-200 group-hover:scale-110 z-10"
                                    alt="Fusing Machine"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-prime via-transparent to-transparent opacity-50"></div>
                                <div className="absolute inset-0 bg-prime bg-opacity-80 opacity-0 group-hover:opacity-70 transition duration-300 z-20"></div>
                                <div className="absolute bottom-3 right-4 flex flex-col items-end z-30">
                                    <ul className="opacity-0 group-hover:opacity-100 transition duration-300 text-white text-right">
                                        {points.fusingmachine.map((point, index) => (
                                            <li className='pb-3' key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-sm text-right text-black md:text-2xl drop-shadow-glow z-20">
                                        {seriesNames.fusingmachine?.name || 'Fusing Machine'}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default CategoryGrid;
