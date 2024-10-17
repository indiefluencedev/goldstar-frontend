import React from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

const DynamicTable = ({ fields, data, showImage, fieldMappings, imageMappings, removeModel, getQuote, showActions = true }) => {
    const renderFieldLabel = (field) => {
        const fieldLabel = fieldMappings[field] || field;
        const fieldImage = imageMappings[field];
        return (
            <div className="field-label">
                {fieldImage ? <img src={fieldImage} alt={fieldLabel} className="field-image" /> : <span>{fieldLabel}</span>}
            </div>
        );
    };

    const renderModelValue = (value) => {
        if (typeof value === 'boolean' || /^(TRUE|true|True)$/.test(value)) {
            return <span className="check text-green-500 font-assistant font-bold">✓</span>;
        }
        if (/^(FALSE|false|False)$/.test(value)) {
            return <span className="cross text-red-600 font-assistant font-bold">✗</span>;
        }
        return value === '*' ? '-' : value || '-';
    };

    const getImageUrl = (model) => {
        return model.mainImage ? `${import.meta.env.VITE_SERVER}/${model.mainImage.replace(/\\/g, '/')}` : '/path/to/default/image.jpg';
    };

    const shouldShowScroll = data.length > 1;

    return (
        <div className="table-container" style={{ maxWidth: shouldShowScroll ? '1240px' : '100%' }}>
            <div className="fields-container">
                {fields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className={`field-row ${fieldIndex % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                        {renderFieldLabel(field)}
                    </div>
                ))}
                {showActions && <div className="field-row even-row">Actions</div>}
            </div>
            <div className="model-columns-container" style={{ overflowX: shouldShowScroll ? 'auto' : 'hidden' }}>
                <div className="model-columns">
                    {data.map((model, index) => (
                        <div key={index} className="model-column">
                            {showImage && model.mainImage && (
                                <img src={getImageUrl(model)} alt={model.model} className="model-image" />
                            )}
                            <h3 className="model-title">{model.model}</h3>
                            {fields.map((field, fieldIndex) => (
                                <div key={fieldIndex} className={`value-cell ${fieldIndex % 2 === 0 ? 'even-row' : 'odd-row'} scrollable-cell`}>
                                    {renderModelValue(model[field])}
                                </div>
                            ))}
                            {showActions && (
                                <div className={`value-cell action-cell`}>
                                    <button onClick={() => removeModel(model._id, model.parentModelId)} className="remove-button">
                                        Remove
                                    </button>
                                    <button onClick={() => getQuote(model.model, model.series)} className="quote-button">
                                        Get a Quote
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

DynamicTable.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    showImage: PropTypes.bool,
    fieldMappings: PropTypes.object,
    imageMappings: PropTypes.object,
    removeModel: PropTypes.func.isRequired,
    getQuote: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

DynamicTable.defaultProps = {
    showImage: true,
    fieldMappings: {},
    imageMappings: {},
    showActions: true
};

export default DynamicTable;
