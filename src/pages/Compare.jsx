import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PacmanLoader from '../components/PacmanLoader';
import emailjs from 'emailjs-com';
import { getFieldMappings, getImageMappings } from './Maping.js';
import DynamicTable from '../components/DynamicTable';
import './comparestyle.css';

const Compare = ({ compareList, setCompareList }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const clearCompareList = () => {
        setCompareList([]);
        navigate('/categories/666ad74aa2d4772943d2f058');
    };

    const removeFromCompareList = (modelId) => {
        setCompareList(prevList => prevList.filter(model => model._id !== modelId));
    };

    const sendEmail = async (model, series) => {
        const templateParams = {
            model,
            series,
            to_name: 'Rijul',
            message: `Hello,\n\nI am interested in receiving a quote for the model ${model} from the ${series} series. Please provide me with more information about this model.\n\nThank you.`
        };

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_QUERY_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
            .then(response => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Email sent successfully');
            })
            .catch(error => {
                console.error('Error sending email:', error);
                alert('Failed to send email');
            });
    };

    const fieldMappings = getFieldMappings();
    const imageMappings = getImageMappings();

    const getFields = (models) => {
        const fields = new Set();
        models.forEach(model => {
            if (model.subModels && model.subModels.length > 0) {
                model.subModels.forEach(subModel => {
                    Object.keys(subModel).forEach(key => {
                        if (key !== '_id' && key !== '__v' && key !== 'image' && key !== 'model' && key !== 'technicalDescription' && key !== 'detailedTechnicalDescription' && key !== 'series' && key !== 'subModels' && subModel[key] !== '*') {
                            fields.add(key);
                        }
                    });
                });
            } else {
                Object.keys(model).forEach(key => {
                    if (key !== '_id' && key !== '__v' && key !== 'image' && key !== 'model' && key !== 'technicalDescription' && key !== 'detailedTechnicalDescription' && key !== 'series' && key !== 'subModels' && model[key] !== '*') {
                        fields.add(key);
                    }
                });
            }
        });
        return Array.from(fields);
    };

    const getModelsToCompare = (models) => {
        return models.reduce((acc, model) => {
            if (model.subModels && model.subModels.length > 0) {
                return [...acc, ...model.subModels.map(subModel => ({ ...subModel, parentModelId: model._id, mainImage: model.image }))];
            }
            return [...acc, { ...model, mainImage: model.image }];
        }, []);
    };

    const modelsToCompare = getModelsToCompare(compareList);
    const fields = getFields(compareList);

    if (loading) {
        return <PacmanLoader />;
    }

    if (compareList.length === 0) {
        return (
            <div className="flex mx-auto items-center justify-center h-screen">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">No items to compare</h1>
            </div>
        );
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
            <div className="container xs:px-0 md:px-5 py-24 mx-auto flex flex-wrap">
                <div className="ml:pl-5 w-full flex xs:flex-col lg:flex-row lg:justify-between xs:items-start lg:items-center mb-4">
                    <h1 className="text-[35px] font-bold">Items in your compare list</h1>
                    <div className="flex-grow mx-4 border-b border-[3px] border-prime border-opacity-25 "></div>
                    <button onClick={clearCompareList} className="bg-red-500 text-white px-4 py-2 xs:mt-5 lg:mt-0 rounded">
                        Clear Compare List
                    </button>
                </div>

                <DynamicTable 
                    fields={fields}
                    data={modelsToCompare}
                    showImage={true}
                    fieldMappings={fieldMappings}
                    imageMappings={imageMappings}
                    removeModel={removeFromCompareList}
                    getQuote={sendEmail}
                />
            </div>
        </section>
    );
};

export default Compare;
