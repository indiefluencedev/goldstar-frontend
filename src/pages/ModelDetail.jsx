import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import PacmanLoader from '../components/PacmanLoader';
import './comparestyle.css'; // Ensure this file contains your custom styles

// Import mapping functions
import { getFieldMappings, getImageMappings } from './Maping';

// Import LockstitchD component
import LockstitchD from '../components/details/LockstichD';

const ModelDetails = ({ addToCompare, compareList }) => {
    const { modelType, modelId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [seriesName, setSeriesName] = useState(location.state?.seriesName || '');
    const [modelDetails, setModelDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hover, setHover] = useState(false);

    const fieldMappings = getFieldMappings();
    const imageMappings = getImageMappings();

    useEffect(() => {
        const fetchModelDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://testing-backend-s0dg.onrender.comapi/${modelType.toLowerCase()}/${modelId}`);
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
    const imageUrl = modelDetails.image ? `https://testing-backend-s0dg.onrender.com${modelDetails.image.replace(/\\/g, '/')}` : '/path/to/default/image.jpg';

    const renderFieldLabel = (field) => {
        if (imageMappings[field]) {
            return <img src={imageMappings[field]} alt={fieldMappings[field]} className="field-image" style={{ width: '30px', height: '30px' }} />;
        }
        return fieldMappings[field] || field;
    };

    return (
        <>
        <div className='pt-24'></div>

        <div className="model-image-section mx-auto max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
           
            <div className="flex flex-col lg:flex-row items-center justify-between">
            <img src={imageUrl} alt={modelDetails.model} className="model-image mx-auto" />
                <div className='w-full lg:w-[600px] text-left lg:ml-[50px]'>
                    <h1 className="text-[30px] lg:text-[50px] font-bold mb-4">{modelDetails.model}</h1>
                    <p className="text-gray-600 text-[16px] lg:text-[20px] mb-4">{modelDetails.technicalDescription}</p>

                    {subModels.length > 0 && (
                        <div className="border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                            <div className="py-2 px-4 font-semibold bg-gray-100">Sub-Model Names</div>
                            {subModels.map((subModel, index) => (
                                <div key={index} className={`py-2 px-4 ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                    {subModel.model}
                                </div>
                            ))}
                        </div>
                    )}

                    <button
                        className='p-3 mt-4 w-[200px] rounded-[25px] border-2 transition duration-300 ease-in-out transform hover:bg-prime hover:text-white'
                        style={{
                            border:'1px solid black',
                            borderColor: hover ? '#544484' : 'gray',
                            color: hover ? 'white' : 'black',
                        }}
                        onClick={handleAddToCompare}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        Add to Compare
                    </button>
                </div>
            </div>
        </div>

        {/* Conditionally render LockstitchD component */}
       
            <LockstitchD modelName={modelDetails.model} />
       

        <div className="mx-auto mt-5 max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
         
            <div className='px-10 mt-6'>
                <h3 className='font-assistant font-bold text-[20px] lg:text-[30px] mt-6 lg:mt-10'>About this item</h3>
                <p className="text-lg mb-10">{modelDetails.detailedTechnicalDescription}</p>
            </div>

            {/* Divs to display model data */}
            <div className="container xs:px-2 ml:px-14 md:px-5 py-11 mx-auto flex flex-wrap">
                <div className="w-full flex xs:flex-col lg:flex-row lg:justify-between xs:items-start lg:items-center mb-1">
                    <h1 className="text-2xl font-bold">Model Details</h1>
                </div>
                <div className="lg:w-1/4 mt-[38px] hidden lg:block">
                    <div className="border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                        <div className="scrollable-content">
                            {combinedDivData.length > 0 ? combinedDivData.map((row, index) => (
                                <div key={index} className={`h-12 px-4 flex items-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                    {renderFieldLabel(row.field)}
                                </div>
                            )) : mainModelData.map((row, index) => (
                                <div key={index} className={`h-12 px-4 flex items-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                    {renderFieldLabel(row.field)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex lg:w-3/4 w-full overflow-x-auto compare-list-container">
                    <div className="flex flex-nowrap space-x-4 compare-list-wrapper">
                        {combinedDivData.length > 0 ? subModels.map((subModel, subIndex) => (
                            <div key={subIndex} className="sm:w-[300px] lg:w-[350px] lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none compare-card">
                                <div className="items-center text-center">
                                    <h3 className="text-lg font-medium">{subModel.model}</h3>
                                </div>
                                <div className="scrollable-content block lg:hidden">
                                    {combinedDivData.map((row, index) => (
                                        <div key={index} className={`h-auto py-4 text-center text-[12px] flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                <div className="scrollable-content hidden lg:block mt-[10px]">
                                    {combinedDivData.map((row, index) => (
                                        <div key={index} className={`h-12 text-center flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                <div className="scrollable-content block lg:hidden">
                                    {mainModelData.map((row, index) => (
                                        <div key={index} className={`h-auto py-4 text-center text-[12px] mx-auto flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                <div className="scrollable-content hidden lg:block mt-[10px]">
                                    {mainModelData.map((row, index) => (
                                        <div key={index} className={`h-12 text-center flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
        </>
    );
};

export default ModelDetails;
