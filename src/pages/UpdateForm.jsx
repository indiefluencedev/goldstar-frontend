import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
    updateLockstitchModel,
    updateOverlockModel,
    updateHeavyDutyModel,
    updateInterlockModel,
    updateSpecialSeriesModel,
    updateZigzagModel,
    updateCuttingModel,
    updateCuttingMachineModel,
    updateFusingMachineModel,
    updateHeatTransferModel,
    updateNeedleDetectorModel,
} from '../services/api';
import MetaTag from '../utils/meta';

const UpdateForm = () => {
    const { modelId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [modelDetails, setModelDetails] = useState(location.state?.modelData || {});
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (!modelDetails) {
            console.error('Model data not passed through state');
        }
    }, [modelDetails]);

    const handleFileChange = (event) => {
        setImageFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!imageFile) {
            alert("Please select an image file to update.");
            return;
        }

        const finalFormData = new FormData();
        finalFormData.append('image', imageFile);

        try {
            // Call the appropriate update function based on the series type
            const seriesType = modelDetails.series?.modelType?.toLowerCase();
            switch (seriesType) {
                case 'lockstitch':
                    await updateLockstitchModel(modelId, finalFormData);
                    break;
                case 'overlock':
                    await updateOverlockModel(modelId, finalFormData);
                    break;
                case 'heavyduty':
                    await updateHeavyDutyModel(modelId, finalFormData);
                    break;
                case 'interlock':
                    await updateInterlockModel(modelId, finalFormData);
                    break;
                case 'specialseries':
                    await updateSpecialSeriesModel(modelId, finalFormData);
                    break;
                case 'zigzag':
                    await updateZigzagModel(modelId, finalFormData);
                    break;
                case 'cuttingseries':
                    await updateCuttingModel(modelId, finalFormData);
                    break;
                case 'cuttingmachine':
                    await updateCuttingMachineModel(modelId, finalFormData);
                    break;
                case 'fusingmachine':
                    await updateFusingMachineModel(modelId, finalFormData);
                    break;
                case 'heattransfer':
                    await updateHeatTransferModel(modelId, finalFormData);
                    break;
                case 'needledetector':
                    await updateNeedleDetectorModel(modelId, finalFormData);
                    break;
                default:
                    throw new Error(`Unknown series type: ${seriesType}`);
            }

            console.log('Form submitted with data:', modelDetails);
            navigate(`/models/${modelDetails.series?.modelType}/${modelId}`);
        } catch (error) {
            console.error(`Error updating model with ID ${modelId}:`, error);
        }
    };

    return (
        <>
        <MetaTag title={`Updating ${modelDetails.model} Model`} />
        <div className="mx-auto max-w-screen-xl pt-36">
            <h2 className="text-2xl font-bold mb-6">Update Model Image</h2>
            {modelDetails && (
                <>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Model: {modelDetails.model}</h3>
                        <h2 className="text-lg text-gray-900">Belongs To: {modelDetails.series?.modelType || 'N/A'} Series</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 mb-2">Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleFileChange}
                                className="block w-full p-2 border border-gray-300 rounded"
                                />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-4">Update Image</button>
                    </form>
                </>
            )}
        </div>
            </>
    );
};

export default UpdateForm;
