import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PacmanLoader from '../components/PacmanLoader';
import emailjs from 'emailjs-com';
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

    const removeFromCompareList = (modelId, subModelId) => {
        if (subModelId) {
            setCompareList(prevList => prevList.map(model => {
                if (model._id === modelId) {
                    const updatedSubModels = model.subModels.filter(subModel => subModel._id !== subModelId);
                    return { ...model, subModels: updatedSubModels };
                }
                return model;
            }).filter(model => model.subModels.length > 0 || !model.subModels));
        } else {
            setCompareList(prevList => prevList.filter(model => model._id !== modelId));
        }
    };

    const sendEmail = async (model, series) => {
        const templateParams = {
            model,
            series,
            to_name: 'Anurag Mishra',  // Replace with the recipient's name
            from_name: 'Your Name',    // Replace with your name
            message: `Hello,\n\nI am interested in receiving a quote for the model ${model} from the ${series} series. Please provide me with more information about this model.\n\nThank you.`
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then(response => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Email sent successfully');
            })
            .catch(error => {
                console.error('Error sending email:', error);
                alert('Failed to send email');
            });
    };

    const fieldMappings = {
        model: 'Model',
        technicalDescription: 'Technical Description',
        detailedTechnicalDescription: 'Detailed Technical Description',
        functions: 'Functions',
        needleType: 'Needle Type',
        needleFeed: 'Needle Feed',
        needleNo: 'Number of Needles',
        threadNo: 'Number of Threads',
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
            return [...acc, model];
        }, []);
    };

    const modelsToCompare = getModelsToCompare(compareList);
    const fields = getFields(compareList);

    if (loading) {
        return <PacmanLoader />;
    }

    if (compareList.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">No items to compare</h1>
            </div>
        );
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
            <div className="container xs:px-0 md:px-5 py-24 mx-auto flex flex-wrap">
            <div className="ml:pl-5 w-full flex xs:flex-col lg:flex-row lg:justify-between xs:items-start lg:items-center mb-4">
    <h1 className="text-[35px] font-bold">Items in your compare list</h1>
    {/* Horizontal line */}
    <div className="flex-grow mx-4   border-b border-[3px] border-prime border-opacity-25 "></div>
    <button onClick={clearCompareList} className="bg-red-500 text-white px-4 py-2 xs:mt-5 lg:mt-0 rounded">
        Clear Compare List
    </button>
</div>


                <div className="lg:w-1/4 mt-[96px] hidden lg:block">
                    <div className="border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                        {fields.map((field, index) => (
                            <p key={index} className={`h-12 px-4 flex items-center ${index % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                {fieldMappings[field] || field}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex lg:w-3/4 w-full overflow-x-auto compare-list-container ml:px-5">
                    <div className="flex flex-nowrap space-x-4 compare-list-wrapper">
                        {modelsToCompare.map((model, index) => {
                            const imageUrl = model.mainImage ? `https://testing-backend-s0dg.onrender.com/${model.mainImage.replace(/\\/g, '/')}` : (model.image ? `https://testing-backend-s0dg.onrender.com/${model.image.replace(/\\/g, '/')}` : '/path/to/default/image.jpg');
                            return (
                                <div key={model._id} className="sm:w-[300px] lg:w-[350px] lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none compare-card">
                                    <div className=" items-center text-center">
                                        <h3 className="text-lg font-medium">{model.model}</h3>
                                    
                                        <img src={imageUrl} alt={model.model} className=" xs:ml-0 md:ml-16 object-fill mb-4" />
                                        
                                    </div>

                                    {/* Mobile view section */}
                                    <div className="block lg:hidden ">
                                        {fields.map((field, fieldIndex) => (
                                            <p key={fieldIndex} className={`h-auto py-4 text-center text-[12px] flex items-center justify-center ${fieldIndex % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                                {typeof model[field] === 'boolean' ? (
                                                    model[field] ? (
                                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                    )
                                                ) : (
                                                    model[field] || '*'
                                                )}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Desktop view section */}
                                    <div className="hidden lg:block mt-[10px]">
                                        {fields.map((field, fieldIndex) => (
                                            <p key={fieldIndex} className={`h-12 text-center flex items-center justify-center ${fieldIndex % 2 === 0 ? 'bg-prime bg-opacity-15' : 'bg-white'}`}>
                                                {typeof model[field] === 'boolean' ? (
                                                    model[field] ? (
                                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                    )
                                                ) : (
                                                    model[field] || '*'
                                                )}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="border-t p-6 text-center">
                                        <button className="flex items-center mt-auto text-black py-2 px-4 w-full focus:outline-none hover:bg-red-500 rounded hover:text-white"
                                            style={{border:"1px solid red"}}
                                            onClick={() => removeFromCompareList(model.parentModelId || model._id, model._id)}>
                                            Remove
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="px-6 pb-4 text-center">
                                        <button
                                            className="flex items-center mt-auto text-white bg-prime border-0 py-2 px-4 w-full focus:outline-none hover:bg-purple-900 rounded"
                                            onClick={() => sendEmail(model.model, model.series)}
                                        >
                                            Get a Quote
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* <div className=" ml:pl-5  w-full flex xs:flex-col lg:flex-row lg:justify-between xs:items-start lg:items-center mb-4">
                   
                    <button onClick={clearCompareList} className="bg-red-500 text-white px-4 py-2 xs:mt-5 rounded">
                        Clear Compare List
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default Compare;
