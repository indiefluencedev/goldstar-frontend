import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './styles.css';
import axios from '../../api';
import {
    deleteLockstitchModel,
    deleteOverlockModel,
    deleteInterlockModel,
    deleteHeavyDutyModel,
    deleteSpecialSeriesModel,
    deleteZigzagModel,
    deleteCuttingModel
} from '../../services/api.js'; // Adjust the path as needed

const ModelCard = ({ model, addToCompare, compareList, loggedIn }) => { // Ensure loggedIn prop is received
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/models/${model.series.modelType}/${model._id}`);
    };

    const handleButtonClick = (event) => {
        event.stopPropagation();
        addToCompare(model);
    };

    const handleEditClick = (event) => {
        event.stopPropagation();
        navigate(`/update-form/${model._id}`, { state: { modelData: model } });
    };

    const handleDeleteClick = async (event) => {
        event.stopPropagation();
        try {
            await deleteModelByType(model.series.modelType, model._id);
            console.log('Model deleted successfully:', model._id);
            // Add any additional logic here, like refreshing the list of models
        } catch (error) {
            console.error('Error deleting model:', error);
        }
    };

    const deleteModelByType = async (modelType, id) => {
        switch (modelType.toLowerCase()) {
            case 'lockstitch':
                return deleteLockstitchModel(id);
            case 'overlock':
                return deleteOverlockModel(id);
            case 'interlock':
                return deleteInterlockModel(id);
            case 'heavyduty':
                return deleteHeavyDutyModel(id);
            case 'specialseries':
                return deleteSpecialSeriesModel(id);
            case 'zigzag':
                return deleteZigzagModel(id);
            case 'cutting':
                return deleteCuttingModel(id);
            default:
                throw new Error(`Unknown model type: ${modelType}`);
        }
    };

    const imageUrl = model.image ? `http://localhost:8001/${model.image.replace(/\\/g, '/')}` : '/path/to/default/image.jpg';

    const trimText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="card-wrapper mx-auto">
            <div className="card mx-auto" onClick={handleCardClick}>
                <img src={imageUrl} alt={model.model} />
                <h2>{model.model}</h2>
                <p>{trimText(model.technicalDescription, 60)}</p> {/* Adjust the maxLength as needed */}
                {loggedIn && ( // Ensure loggedIn is used to conditionally render buttons
                    <div className="icon-buttons">
                        <FaEdit className="edit-icon" style={{ color: 'blue' }} onClick={handleEditClick} />
                        <FaTrashAlt className="delete-icon" style={{ color: 'red' }} onClick={handleDeleteClick} />
                    </div>
                )}
                <button className="hover:border-black hover:text-prime" onClick={handleButtonClick}>
                    Add to Compare
                </button>
            </div>
        </div>
    );
};

export default ModelCard;
