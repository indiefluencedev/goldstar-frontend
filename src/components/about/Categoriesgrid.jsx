import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

const CategoryGrid = () => {
    const [seriesNames, setSeriesNames] = useState({});
    const [loading, setLoading] = useState(true);
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

    const handleCardClick = (seriesId) => {
        navigate(`/categories/${seriesId}`);
    };

    return (
        <div id='grid' className='max-w-[1240px] mx-auto'>
            <h2 className="text-2xl md:text-4xl font-bold text-prime">Category</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 max-w-[350px] md:max-w-[1200px] mx-auto xl:gap-8 xs:mt-6 xl:mt-24">
                {loading ? (
                    <Loader />
                ) : (
                    Object.entries(seriesNames).map(([key, series]) => (
                        <div
                            key={key}
                            onClick={() => handleCardClick(series._id)}
                            className="group relative flex flex-col items-center justify-end overflow-hidden bg-gray-100 col-span-1 h-52 md:h-60 cursor-pointer"
                        >
                            <div className="flex items-center justify-center h-full w-full bg-gray-100">
                                <img
                                    src={images[key]}
                                    className="h-full w-full object-contain transition-transform duration-400 ease-in-out group-hover:scale-110"
                                    alt={`${series.name} Series`}
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-prime w-full py-2 flex flex-col items-start transition-all duration-400 ease-in-out group-hover:py-6">
                                <span className="font-assistant font-bold xs:text-[12px] md:text-[20px] pl-6 text-white mb-2">
                                    {series.name || `${key.charAt(0).toUpperCase() + key.slice(1)} Series`}
                                </span>
                                <span className="font-assistant pl-6 text-[14px] md:text-[16px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out absolute bottom-2 group-hover:relative group-hover:bottom-auto group-hover:pt-2">
                                    Discover Models &rarr;
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CategoryGrid;
