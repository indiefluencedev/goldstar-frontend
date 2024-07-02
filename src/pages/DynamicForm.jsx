import { useState, useEffect } from 'react';
import {
    getSeries,
    getSeriesById,
    getLockstitchModelSchemaFields,
    getOverlockModelSchemaFields,
    getInterlockModelSchemaFields,
    getHeavyDutyModelSchemaFields,
    createLockstitchModel,
    createOverlockModel,
    createInterlockModel,
    createHeavyDutyModel,
} from '../services/api'; // Adjust the import path according to your project structure
import MetaTag from '../utils/meta';

const DynamicForm = () => {
    const [series, setSeries] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState('');
    const [schemaFields, setSchemaFields] = useState({});
    const [formData, setFormData] = useState({});
    const [includeSubModel, setIncludeSubModel] = useState(false);
    const [subModelSchemaFields, setSubModelSchemaFields] = useState({});
    const [subModels, setSubModels] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const seriesData = await getSeries();
                setSeries(seriesData);
            } catch (error) {
                console.error('Error fetching series:', error);
            }
        };

        fetchSeries();
    }, []);

    const handleSeriesChange = async (event) => {
        const seriesId = event.target.value;
        setSelectedSeries(seriesId);

        if (seriesId) {
            try {
                const seriesDetails = await getSeriesById(seriesId);

                const fields = await fetchSchemaFields(seriesDetails.modelType);
                const initialFormData = Object.keys(fields).reduce((acc, field) => {
                    if (field !== '_id' && field !== '__v') {
                        acc[field] = fields[field].default !== undefined ? fields[field].default : (fields[field].type === 'Boolean' ? false : '');
                    }
                    return acc;
                }, {});

                // Include series ID in form data
                initialFormData.series = seriesId;

                setSchemaFields(fields);
                setFormData(initialFormData);

                console.log('Schema fields:', fields); // Debug log
                console.log('Initial Form Data:', initialFormData); // Debug log
            } catch (error) {
                console.error(`Error fetching details for series with ID ${seriesId}:`, error);
            }
        }
    };

    const fetchSchemaFields = async (modelType) => {
        try {
            switch (modelType) {
                case 'Lockstitch':
                    const lockstitchFields = await getLockstitchModelSchemaFields();
                    console.log('Lockstitch Schema Fields:', lockstitchFields); // Debug log
                    return lockstitchFields;
                case 'Overlock':
                    return await getOverlockModelSchemaFields();
                case 'Interlock':
                    return await getInterlockModelSchemaFields();
                case 'HeavyDuty':
                    return await getHeavyDutyModelSchemaFields();
                default:
                    return {};
            }
        } catch (error) {
            console.error(`Error fetching schema fields for model type ${modelType}:`, error);
            return {};
        }
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubModelInputChange = (index, event) => {
        const { name, value, type, checked } = event.target;
        const updatedSubModels = [...subModels];
        updatedSubModels[index] = {
            ...updatedSubModels[index],
            [name]: type === 'checkbox' ? checked : value,
        };
        setSubModels(updatedSubModels);
    };

    const addSubModel = () => {
        const initialSubModelFormData = Object.keys(subModelSchemaFields).reduce((acc, field) => {
            acc[field] = subModelSchemaFields[field].default !== undefined ? subModelSchemaFields[field].default : (subModelSchemaFields[field].type === 'Boolean' ? false : '');
            return acc;
        }, {});
        setSubModels([...subModels, initialSubModelFormData]);
    };

    const removeSubModel = (index) => {
        const updatedSubModels = subModels.filter((_, i) => i !== index);
        setSubModels(updatedSubModels);
    };

    const handleIncludeSubModelChange = (event) => {
        setIncludeSubModel(event.target.checked);
        if (event.target.checked) {
            const subModelFields = Object.keys(schemaFields).reduce((acc, field) => {
                if (field !== '_id' && field !== '__v' && field !== 'series') {
                    acc[field] = schemaFields[field];
                }
                return acc;
            }, {});
            setSubModelSchemaFields(subModelFields);
        } else {
            setSubModelSchemaFields({});
            setSubModels([]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataObj = new FormData();

        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key]);
        });

        if (selectedFile) {
            formDataObj.append('image', selectedFile);
        }

        if (includeSubModel) {
            subModels.forEach((subModel, index) => {
                Object.keys(subModel).forEach((key) => {
                    formDataObj.append(`subModels[${index}][${key}]`, subModel[key]);
                });
            });
        }

        try {
            let response;
            const seriesDetails = await getSeriesById(selectedSeries);

            switch (seriesDetails.modelType) {
                case 'Lockstitch':
                    response = await createLockstitchModel(formDataObj);
                    break;
                case 'Overlock':
                    response = await createOverlockModel(formDataObj);
                    break;
                case 'Interlock':
                    response = await createInterlockModel(formDataObj);
                    break;
                case 'HeavyDuty':
                    response = await createHeavyDutyModel(formDataObj);
                    break;
                default:
                    throw new Error('Unknown model type');
            }

            console.log('Response:', response.data);
            // Optionally, handle the response from the server
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <>
        <MetaTag title="GoldStar - Form" />
            <div className="pt-20 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Select Series to View and Create Models</h2>
                <div className="mb-4">
                    <label htmlFor="series" className="block text-gray-700 mb-2">Select Series:</label>
                    <select id="series" value={selectedSeries} onChange={handleSeriesChange} className="block w-full p-2 border border-gray-300 rounded">
                        <option value="">Select a series</option>
                        {series.map((serie) => (
                            <option key={serie._id} value={serie._id}>{serie.name}</option>
                        ))}
                    </select>
                </div>
                {Object.keys(schemaFields).length > 0 && (
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                        <div className="grid grid-cols-2 gap-4">
                            {Object.keys(schemaFields).map((field) => (
                                field !== '_id' && field !== '__v' && field !== 'series' && (
                                    <div key={field} className="mb-4">
                                        <label htmlFor={field} className="block text-gray-700 mb-2">{field}</label>
                                        {schemaFields[field] === 'Boolean' ? (
                                            <input
                                                type="checkbox"
                                                id={field}
                                                name={field}
                                                checked={formData[field]}
                                                onChange={handleInputChange}
                                                className="block w-6 h-6 border border-gray-300 rounded"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleInputChange}
                                                className="block w-full p-2 border border-gray-300 rounded"
                                            />
                                        )}
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 mb-2">Image:</label>
                            <input type="file" id="image" name="image" onChange={handleFileChange} className="block w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="includeSubModel" className="block text-gray-700 mb-2">Include Sub-Models</label>
                            <input
                                type="checkbox"
                                id="includeSubModel"
                                name="includeSubModel"
                                checked={includeSubModel}
                                onChange={handleIncludeSubModelChange}
                                className="block w-6 h-6 border border-gray-300 rounded"
                            />
                        </div>
                        {includeSubModel && (
                            <div className="bg-gray-100 p-4 rounded mt-4">
                                <h3 className="text-lg font-semibold mb-4">Sub-Model Fields</h3>
                                {subModels.map((subModel, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-md font-semibold mb-2">Sub-Model {index + 1}</h4>
                                            <button
                                                type="button"
                                                onClick={() => removeSubModel(index)}
                                                className="bg-red-500 text-white p-1 rounded hover:bg-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {Object.keys(subModelSchemaFields).map((field) => (
                                                <div key={field} className="mb-4">
                                                    <label htmlFor={`subModel-${index}-${field}`} className="block text-gray-700 mb-2">{field}</label>
                                                    {subModelSchemaFields[field] === 'Boolean' ? (
                                                        <input
                                                            type="checkbox"
                                                            id={`subModel-${index}-${field}`}
                                                            name={field}
                                                            checked={subModel[field]}
                                                            onChange={(event) => handleSubModelInputChange(index, event)}
                                                            className="block w-6 h-6 border border-gray-300 rounded"
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            id={`subModel-${index}-${field}`}
                                                            name={field}
                                                            value={subModel[field]}
                                                            onChange={(event) => handleSubModelInputChange(index, event)}
                                                            className="block w-full p-2 border border-gray-300 rounded"
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addSubModel}
                                    className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
                                >
                                    Add Sub-Model
                                </button>
                            </div>
                        )}
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-4">Create Model</button>
                    </form>
                )}
            </div>
        </>
    );
};

export default DynamicForm;
