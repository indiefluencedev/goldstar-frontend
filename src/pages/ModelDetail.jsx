import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CategoryDropdown from '../components/catagory/CategoryDropdown';
import ModelCardSkeleton from '../components/skelten/ModelCardSkeleton';
import './modeltable.css'; // Ensure this file contains your custom styles

//F goldstar

import { getFieldMappings, getImageMappings } from './Maping';

import stitchWidthFromFrontendIcon from '../assets/svg/fields/Stitch width from front end type1.svg';
import stitchWidthFromFrontendIcon2 from '../assets/svg/fields/Stitch width from front end  2.svg';

import LockstitchD from '../components/details/LockstichD';
import MetaTag from '../utils/meta';

const ModelDetails = ({ addToCompare, compareList }) => {
    const { modelType, modelId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [seriesName, setSeriesName] = useState(location.state?.seriesName || '');
    const [modelDetails, setModelDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hover, setHover] = useState(false);
    const cellRefs = useRef([]); // Use ref to keep track of cell elements

    const fieldMappings = getFieldMappings();
    const imageMappings = getImageMappings();

    useEffect(() => {
        const fetchModelDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:8001/api/${modelType.toLowerCase()}/${modelId}`);
                console.log('Response data:', response.data);
                setModelDetails(response.data);
                if (response.data.series && response.data.series.name) {
                    setSeriesName(response.data.series.name);
                }
            } catch (error) {
                console.error(`Error fetching model details for ${modelType} with ID ${modelId}:`, error);
                setError('Failed to fetch model details');
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchModelDetails();
    }, [modelType, modelId]);

    useEffect(() => {
        const applyPaddingIfMoreThanTwoLines = (element) => {
            const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
            const height = element.scrollHeight;
            const numberOfLines = height / lineHeight;
            if (numberOfLines > 2) {
                element.classList.add('scrollable-cell-extra-padding');
            } else {
                element.classList.remove('scrollable-cell-extra-padding');
            }
        };

        // Check the height of each cell and add padding-top if content exceeds two lines
        cellRefs.current.forEach(cell => {
            if (cell) {
                applyPaddingIfMoreThanTwoLines(cell);
                console.log(`Checked cell: ${cell.textContent}`); // Comment for debugging
            }
        });
    }, [loading, modelDetails]);

    if (loading) {
        return <ModelCardSkeleton />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const subModels = modelDetails.subModels || [];

    const mainModelData = Object.keys(modelDetails).filter(key =>
        typeof modelDetails[key] !== 'object' && key !== '_id' && key !== '__v' && key !== 'series' &&
        key !== 'technicalDescription' && key !== 'detailedTechnicalDescription' && key !== 'image' && modelDetails[key] !== '*'
    ).map(key => ({
        field: key,
        value: modelDetails[key]
    }));

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
        addToCompare({ ...modelDetails, imageUrl });
        if (compareList.length >= 1) {
            navigate('/compare');
        }
    };

    const handleCompareClick = () => {
        navigate('/compare');
    };

    const imageUrl = modelDetails.image ? `http://localhost:8001/${modelDetails.image.replace(/\\/g, '/')}` : '/path/to/default/image.jpg';

    const renderFieldLabel = (field) => {
        if (imageMappings[field]) {
            return <img src={imageMappings[field]} alt={fieldMappings[field]} className="w-8 h-8" />;
        }
        return fieldMappings[field] || field;
    };

    const renderModelValue = (value) => {
        if (value === "Stitch width from front end") {
            return <img src={stitchWidthFromFrontendIcon2} alt={value} className="w-20 custom-img" />;
        }
        if (value === "Stitch width from front end type1") {
            return <img src={stitchWidthFromFrontendIcon} alt={value} className="w-20 custom-img" />;
        }
        return value;
    };

    return (
        <>
            <MetaTag title={`GoldStar - ${modelType.toLowerCase()} Series | ${modelDetails.model} Model`} description={modelDetails.detailedTechnicalDescription} imageUrl={imageUrl} imageAlt={`${modelType.toLowerCase()} Series | ${modelDetails.model} Model`} />
            <div className="pt-24"></div>
            <div className="model-image-section mx-auto max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <img src={imageUrl} alt={modelDetails.model} className="w-[550px] mx-auto" />
                    <div className="w-full lg:w-[600px] text-left lg:ml-12">
                        <h1 className="text-2xl lg:text-4xl font-bold mb-4">{modelDetails.model}</h1>
                        <p className="text-gray-600 text-lg lg:text-xl mb-4">{modelDetails.technicalDescription}</p>
                        {subModels.length > 0 && (
                            <div className="border-t max-w-[500px] border-gray-300 border rounded-lg overflow-hidden">
                                <div className="py-2 px-4 font-semibold bg-prime bg-opacity-15">Sub-Model Names</div>
                                {subModels.map((subModel, index) => (
                                    <div key={index} className={`py-2 px-4 ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                        {subModel.model}
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            className="p-3 mt-4 w-48 rounded-full border transition duration-300 ease-in-out transform hover:bg-prime bg-opacity-15 hover:text-white"
                            style={{
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
            <LockstitchD modelName={modelDetails.model} />
            <div className="mx-auto mt-5 max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
                <div className="px-10 mt-6">
                    <h3 className="font-bold text-lg lg:text-2xl mt-6 lg:mt-10">About this item</h3>
                    <p className="text-lg mb-10">{modelDetails.detailedTechnicalDescription}</p>
                </div>
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-4">
                        <h1 className="text-2xl font-bold">Model Details</h1>
                    </div>
                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="mt-[-10px] border-t mr-3 border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden scrollable-content">
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
                    <div className="flex lg:w-3/4 w-full overflow-x-auto scrollable-content">
                        <div className="flex flex-nowrap space-x-4">
                            {combinedDivData.length > 0 ? subModels.map((subModel, subIndex) => (
                                <div key={subIndex} className="w-[330px] lg:w-[350px] mb-4 border border-gray-300 rounded-lg">
                                    <div className="block lg:hidden">
                                        {combinedDivData.map((row, index) => (
                                            <div key={index} ref={el => (cellRefs.current[subIndex * combinedDivData.length + index] = el)} className={`py-4 text-center text-sm flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                                    renderModelValue(row.subModelValues[subIndex])
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="hidden lg:block mt-2">
                                        {combinedDivData.map((row, index) => (
                                            <div key={index} ref={el => (cellRefs.current[subIndex * combinedDivData.length + index] = el)} className={`h-12 scrollable-cell text-center flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                                    renderModelValue(row.subModelValues[subIndex])
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )) : (
                                <div className="w-[330px] lg:w-[350px] mb-4 border border-gray-300 rounded-lg">
                                    <div className="block lg:hidden">
                                        {mainModelData.map((row, index) => (
                                            <div key={index} ref={el => (cellRefs.current[index] = el)} className={`py-4 text-center text-sm flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                                    renderModelValue(row.value)
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="hidden lg:block mt-2">
                                        {mainModelData.map((row, index) => (
                                            <div key={index} ref={el => (cellRefs.current[index] = el)} className={`h-12 text-center flex items-center justify-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
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
                                                    renderModelValue(row.value)
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
