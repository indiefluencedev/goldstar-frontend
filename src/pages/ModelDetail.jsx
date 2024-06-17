import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import PacmanLoader from '../components/PacmanLoader';
import './comparestyle.css'; // Ensure this file contains your custom styles

const ModelDetails = ({ addToCompare, compareList }) => {
    const { modelType, modelId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [seriesName, setSeriesName] = useState(location.state?.seriesName || '');
    const [modelDetails, setModelDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hover, setHover] = useState(false);

    const fieldMappings = {
        model: 'Model',
        technicalDescription: 'Technical Description',
        detailedTechnicalDescription: 'Detailed Technical Description',
        functions: 'Functions',
        needleType: 'Needle Type',
        needleFeed: 'Needle Feed',
        needleNo: 'Number of Needles',
        threadNo: 'Number of Threads',
        needleStitchLength:'Needle Stitch Length',
        doubleNeedleStitchLength: 'Double Needle Stitch Length',
        liftHeightRange: 'Lift Height Range',
        hasAutoThreadTrimmer: 'Auto Thread Trimmer',
        hasAutoLift: 'Auto Lift',
        isSuitableForLightMaterial: 'Suitable for Light Material',
        isSuitableForMediumMaterial: 'Suitable for Medium Material',
        isSuitableForHeavyMaterial: 'Suitable for Heavy Material',
        horizontalHook: 'Horizontal Hook',
        verticalHook: 'Vertical Hook',
        weight: 'Weight',
        packingSize: 'Packing Size',
        speedInRPM: 'Speed (RPM)',
        differentialRatio: 'Differential Ratio',
        stitchLengthRange: 'Stitch Length Range',
        stitchWidthRange: 'Stitch Width Range',
        needleGauge: 'Needle Gauge',
        needleBarStroke: 'Needle Bar Stroke',
        image: 'Image',
        series: 'Series',
        subModels: 'Sub-Models'
    };

    useEffect(() => {
        const fetchModelDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://testing-backend-s0dg.onrender.com/api/models/${modelType}/${modelId}`);
                console.log('Response data:', response.data);
                setModelDetails(response.data);
                if (response.data.series && response.data.series.name) {
                    setSeriesName(response.data.series.name);
                }
            } catch (error) {
                console.error(`Error fetching model details for ${modelType} with ID ${modelId}:`, error);
                setError('Failed to fetch model details');
            } finally {
                // Ensure loader appears for at least 1 second
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchModelDetails();
    }, [modelType, modelId]);

    if (loading) {
        return <PacmanLoader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const subModels = modelDetails.subModels || [];

    // Combine main model data for the div layout if there are no sub-models
    const mainModelData = Object.keys(modelDetails).filter(key => 
        typeof modelDetails[key] !== 'object' && key !== '_id' && key !== '__v' && key !== 'series' &&
        key !== 'technicalDescription' && key !== 'detailedTechnicalDescription' && key !== 'image' && modelDetails[key] !== '*'
    ).map(key => ({
        field: key,
        value: modelDetails[key]
    }));

    // Combine sub-model data for the div layout if there are sub-models
    const combinedDivData = subModels.length > 0 ? Object.keys(subModels[0]).filter(key => 
        typeof subModels[0][key] !== 'object' && key !== '_id' && key !== '__v' &&
        key !== 'technicalDescription' && key !== 'detailedTechnicalDescription' && key !== 'image' && subModels[0][key] !== '*'
    ).map(key => ({
        field: key,
        subModelValues: subModels.map(subModel => 
            subModel[key] !== undefined && subModel[key] !== '*' ? subModel[key] : '-'
        )
    })) : [];

    const handleAddToCompare = (event) => {
        event.stopPropagation();
        addToCompare(modelDetails);
        if (compareList.length >= 1) {
            navigate('/compare');
        }
    };

    const handleCompareClick = () => {
        navigate('/compare');
    };

    // Construct the full image URL
    const imageUrl = modelDetails.image ? `https://testing-backend-s0dg.onrender.com/api/${modelDetails.image.replace(/\\/g, '/')}` : '/path/to/default/image.jpg';

    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="flex mb-4 pl-0 pt-[100px]">
                <CategoryDropdown
                    selectedSeriesName={seriesName}
                    compareList={compareList}
                    handleCompareClick={handleCompareClick}
                />
            </div>

            <div className='mt-14 flex flex-col px-10 lg:flex-row mx-auto'>
                <img src={imageUrl} alt={modelDetails.model} className="w-full lg:w-[600px] h-auto mb-4 lg:mb-0 xs:h-[200px] lg:h-[400px]" />
                <div className='w-full lg:w-[600px] lg:ml-[100px]'>
                    <h1 className="text-[30px] lg:text-[50px] font-bold mb-4">{modelDetails.model}</h1>
                    <p className="text-gray-600 text-[16px] lg:text-[20px] mb-4">{modelDetails.technicalDescription}</p>

                    {subModels.length > 0 && (
                        <div className="border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                            <div className="py-2 px-4 font-semibold bg-gray-100">Sub-Model Names</div>
                            {subModels.map((subModel, index) => (
                                <div key={index} className={`py-2 px-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    {subModel.model}
                                </div>
                            ))}
                        </div>
                    )}

                    <button
                        className='p-3 w-[200px] rounded-[25px]'
                        style={{
                            border: '2px solid gray',
                            backgroundColor: hover ? '#544484' : 'white',
                            color: hover ? 'white' : 'black',
                            transition: 'background-color 0.3s, color 0.3s'
                        }}
                        onClick={handleAddToCompare}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        Add to Compare
                    </button>
                </div>
            </div>
            <div className='px-10'>
                <h3 className='font-assistant font-bold text-[20px] lg:text-[30px] mt-6 lg:mt-10'>About this item</h3>
                <p className="text-lg mb-10">{modelDetails.detailedTechnicalDescription}</p>
            </div>

            {/* Divs to display model data */}
            <div className="container xs:px-0 md:px-5 py-11 mx-auto flex flex-wrap">
                <div className="w-full flex xs:flex-col lg:flex-row lg:justify-between xs:items-start lg:items-center mb-1">
                    <h1 className="text-2xl font-bold">Model Details</h1>
                </div>
                <div className="lg:w-1/4 mt-[35px] hidden lg:block">
                    <div className="border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                        {combinedDivData.length > 0 ? combinedDivData.map((row, index) => (
                            <div key={index} className={`h-12 px-4 flex items-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                {fieldMappings[row.field] || row.field}
                            </div>
                        )) : mainModelData.map((row, index) => (
                            <div key={index} className={`h-12 px-4 flex items-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                {fieldMappings[row.field] || row.field}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex lg:w-3/4 w-full overflow-x-auto compare-list-container">
                    <div className="flex flex-nowrap space-x-4 compare-list-wrapper">
                        {combinedDivData.length > 0 ? subModels.map((subModel, subIndex) => (
                            <div key={subIndex} className="sm:w-[300px] lg:w-[350px] lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none compare-card">
                                <div className="items-center text-center">
                                    <h3 className="text-lg font-medium">{subModel.model}</h3>
                                </div>
                                <div className="block lg:hidden">
                                    {combinedDivData.map((row, index) => (
                                        <div key={index} className={`h-auto py-4 text-center text-[12px] flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                            {typeof row.subModelValues[subIndex] === 'boolean' ? (
                                                row.subModelValues[subIndex] ? (
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                )
                                            ) : (
                                                row.subModelValues[subIndex] || '*'
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="hidden lg:block mt-[10px]">
                                    {combinedDivData.map((row, index) => (
                                        <div key={index} className={`h-12 text-center flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                            {typeof row.subModelValues[subIndex] === 'boolean' ? (
                                                row.subModelValues[subIndex] ? (
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                )
                                            ) : (
                                                row.subModelValues[subIndex] || '*'
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )) : (
                            <div className="sm:w-[300px] lg:w-[350px] lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none compare-card">
                                <div className="items-center text-center">
                                    <h3 className="text-lg font-medium">{modelDetails.model}</h3>
                                </div>
                                <div className="block lg:hidden">
                                    {mainModelData.map((row, index) => (
                                        <div key={index} className={`h-auto py-4 text-center text-[12px] flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                            {typeof row.value === 'boolean' ? (
                                                row.value ? (
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                )
                                            ) : (
                                                row.value || '*'
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="hidden lg:block mt-[10px]">
                                    {mainModelData.map((row, index) => (
                                        <div key={index} className={`h-12 text-center flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                            {typeof row.value === 'boolean' ? (
                                                row.value ? (
                                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                )
                                            ) : (
                                                row.value || '*'
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelDetails;
