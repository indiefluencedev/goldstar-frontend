import React, { useEffect, useState, useContext, Suspense, lazy } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import MetaTag from '../utils/meta';
import axios from 'axios';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import ModelCardSkeleton from '../components/skelten/ModelCardSkeleton';
import Catagorybannerskeleton from '../components/skelten/Catagorybannerskeleton';
import AuthContext from '../Authcontext';
import bannerImage from '../assets/png/banner.png';
import bannerMobile from '../assets/png/bannermobile.png';



const ModelCard = lazy(() => import('../components/catagory/ModelCard'));

import lockstitchImage from '../assets/svg/Lock.svg';
import overlockImage from '../assets/svg/Overlock.svg';
import interlockImage from '../assets/svg/Interlock.svg';
import heavyDutyImage from '../assets/svg/HeavyDuty.svg';
import specialImage from '../assets/svg/Special.svg';
import zigzagImage from '../assets/svg/Zigzag.svg';
import cuttingImage from '../assets/svg/Cutting.svg';
import Cuttingmachine from '../assets/png/cuttingmachineseries.png';
import Fusion from '../assets/png/fusion.png';
import Heattransfer from '../assets/png/heattransfer.png';
import Needledetector from '../assets/png/needledetector.png';
import Catagoryfooter from '../components/catagory/Catagoryfooter';

const Categories = ({ addToCompare, compareList }) => {
    const { seriesId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { loggedIn } = useContext(AuthContext);
    const [seriesName, setSeriesName] = useState('');
    const [modelDetails, setModelDetails] = useState([]);
    const [seriesData, setSeriesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const imageUrl = location.state?.imageUrl;

    const seriesImages = {
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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const seriesResponse = await axios.get(`http://localhost:8001/api/series/${seriesId}`);
                const seriesData = seriesResponse.data;
                setSeriesName(seriesData.modelType);
                setSeriesData(seriesData);

                const modelDetailPromises = seriesData.models.map(async (model) => {
                    const url = `http://localhost:8001/api/${seriesData.modelType.toLowerCase()}/${model._id}`;
                    try {
                        const response = await axios.get(url);
                        return {
                            ...response.data,
                            series: seriesData
                        };
                    } catch (error) {
                        return { error: error.response?.data?.message };
                    }
                });

                const modelsDetails = await Promise.all(modelDetailPromises);
                setModelDetails(modelsDetails);

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                setError('Failed to fetch series or models');
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, [seriesId]);

    const handleCompareClick = () => {
        if (compareList.length > 0) {
            navigate('/compare');
        }
    };

    const handleModelClick = (model) => {
        if (seriesData) {
            navigate(`/models/${seriesData.modelType}/${model._id}`, { state: { seriesName } });
        }
    };

    const handleCreateClick = () => {
        navigate('/form');
    };

    useEffect(() => {
        if (modelDetails.length < 4) {
            setShowMore(true);
        }
    }, [modelDetails]);

    if (loading) {
        return (
            <>
                <Catagorybannerskeleton />
                <div className="grid-container">
                    {[...Array(8)].map((_, index) => (
                        <ModelCardSkeleton key={index} className="grid-item" />
                    ))}
                </div>
            </>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    const seriesKey = seriesData ? seriesData.modelType.toLowerCase() : null;
    const seriesImage = imageUrl || (seriesKey && seriesImages[seriesKey]);

    return (
        <>
            <MetaTag title={`GoldStar - ${seriesName} Series`} />
            <div className="xs:pt-[80px] md:pt-[70px]">
                {seriesImage && (
                    <div className="relative w-full mb-6">
                        <img src={bannerImage} alt="Banner" className="w-full hidden md:block h-auto object-cover" />
                        <img src={bannerMobile} alt="Banner" className="w-full block md:hidden h-auto object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full flex xs:flex-col md:flex-row items-center justify-between">
                            <div className="px-4 sm:px-8 text-white">
                                <h1 className="xs:text-[40px] xs:pt-9 sm:text-3xl lg:text-5xl font-bold">{seriesName}</h1>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <img src={seriesImage} alt={seriesName} className="xs:h-[200px] sm:h-[150px] md:h-[200px] xl:h-[300px] w-auto object-contain mr-4 sm:mr-8" />
                            </div>
                        </div>
                    </div>
                )}
                <div className="xl:max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-20">
                    <div className="flex mb-4 justify-between">
                        <CategoryDropdown
                            selectedSeriesName={seriesName}
                            compareList={compareList}
                            handleCompareClick={handleCompareClick}
                        />
                        {loggedIn && (
                            <div className="flex space-x-4">
                                <button className="bg-green-500 text-white p-3 rounded-lg" onClick={handleCreateClick}>
                                    Create
                                </button>
                            </div>
                        )}
                    </div>
                    <Suspense fallback={<div className="grid-container"  >
                        {[...Array(8)].map((_, index) => (
                            <ModelCardSkeleton key={index} className="grid-item" />
                        ))}
                    </div>}>
                        <div className="grid-container">
                            {modelDetails.slice(0, showMore ? modelDetails.length : 4).map((model, index) => (
                                <ModelCard
                                    key={model._id || index}
                                    model={model}
                                    addToCompare={addToCompare}
                                    compareList={compareList}
                                    onClick={() => handleModelClick(model)}
                                    loggedIn={loggedIn}
                                    className="grid-item"
                                />
                            ))}
                        </div>
                    </Suspense>
                    {showMore && (
                        <div className="flex justify-center mt-4">
                            <button className="bg-prime text-white py-2 px-4 rounded-lg" onClick={() => setShowMore(false)}>
                                Show Less
                            </button>
                        </div>
                    )}
                    {!showMore && modelDetails.length > 4 && (
                        <div className="flex justify-center mt-4">
                            <button className="bg-prime text-white py-2 px-4 rounded-lg" onClick={() => setShowMore(true)}>
                                Show More
                            </button>
                        </div>
                    )}
                </div>
                <Catagoryfooter seriesName={seriesName} />
            </div>
        </>
    );
};

export default Categories;
