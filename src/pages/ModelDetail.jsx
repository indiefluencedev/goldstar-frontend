import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ModelDetailsTable from './ModelDetailsTable';
import LockstitchD from '../components/details/LockstichD';
import './modeltable.css'; // Ensure this file contains your custom styles

import { getFieldMappings, getImageMappings } from './Maping';
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

    const fieldMappings = getFieldMappings();
    const imageMappings = getImageMappings();

    useEffect(() => {
        const fetchModelDetails = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://goldstar-backend.onrender.com/api/${modelType.toLowerCase()}/${modelId}`);
                setModelDetails(response.data);
                if (response.data.series && response.data.series.name) {
                    setSeriesName(response.data.series.name);
                }
            } catch (error) {
                console.error(`Error fetching model details for ${modelType} with ID ${modelId}:`, error);
                setError('Failed to fetch model details');
            } finally {
                setLoading(false);
            }
        };

        fetchModelDetails();
    }, [modelType, modelId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const subModels = modelDetails.subModels || [];

    // Define fields to exclude
    const excludeFields = ['technicalDescription', 'detailedTechnicalDescription', '_id', '__v', 'image', 'seriesId', 'subModels', 'series'];

    // Collect all fields from the main model and submodels
    const allFields = new Set(Object.keys(modelDetails).filter(key => !excludeFields.includes(key)));
    subModels.forEach(subModel => {
        Object.keys(subModel).forEach(key => {
            if (!excludeFields.includes(key)) {
                allFields.add(key);
            }
        });
    });

    const allFieldsArray = Array.from(allFields);

    const combinedDivData = subModels.length > 0 ? subModels.map((subModel) => {
        const filteredSubModel = {};
        Object.keys(subModel).forEach(key => {
            if (!excludeFields.includes(key) && subModel[key] !== '*') {
                filteredSubModel[key] = subModel[key];
            }
        });
        return {
            ...modelDetails,
            ...filteredSubModel
        };
    }) : [modelDetails];

    const handleAddToCompare = (event) => {
        event.stopPropagation();
        addToCompare({ ...modelDetails });
        if (compareList.length >= 1) {
            navigate('/compare');
        }
    };

    const handleCompareClick = () => {
        navigate('/compare');
    };

    const imageUrl = modelDetails.image ? `https://goldstar-backend.onrender.com/${modelDetails.image.replace(/\\/g, '/')}` : '/path/to/default/image.jpg';

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

            <div className="mx-auto mt-5 mb-5 max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
                <div className="px-10 mt-6">
                    <h3 className="font-bold text-lg lg:text-2xl mt-6 lg:mt-10">About this item</h3>
                    <p className="text-lg mb-10">{modelDetails.detailedTechnicalDescription}</p>
                </div>
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-4">
                        <h1 className="text-2xl font-bold">Model Details</h1>
                    </div>
                    <ModelDetailsTable
                        fields={allFieldsArray}
                        data={combinedDivData}
                        fieldMappings={fieldMappings}
                        imageMappings={imageMappings}
                    />
                </div>
            </div>
        </>
    );
};

export default ModelDetails;
