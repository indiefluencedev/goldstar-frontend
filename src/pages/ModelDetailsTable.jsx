import React from 'react';
import PropTypes from 'prop-types';
import './modeltable.css';

const ModelDetailsTable = ({ fields, data, fieldMappings, imageMappings }) => {
    const renderFieldLabel = (field) => {
        const fieldLabel = fieldMappings[field] || field;
        const fieldImage = imageMappings[field];
        return (
            <div className="field-label">
                {fieldImage && <img src={fieldImage} alt={fieldLabel} className="field-image" />}
                <span>{fieldLabel}</span>
            </div>
        );
    };

    const renderModelValue = (value) => {
        if (typeof value === 'boolean' || /^(TRUE|true|True)$/.test(value)) {
            return <span className="check-icon">✓</span>;
        }
        if (/^(FALSE|false|False)$/.test(value)) {
            return <span className="cross-icon">✗</span>;
        }
        return value !== '*' ? value || '-' : '-';
    };

    // Filter out fields that have '*' or no value in all models and submodels
    const filteredFields = fields.filter((field) =>
        data.some((model) => model[field] !== '*' && model[field] !== undefined)
    );

    return (
        <div className="table-container" style={{ maxWidth: data.length > 2 ? '1240px' : 'none' }}>
            <div className="fields-container">
                {filteredFields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className={`field-row ${fieldIndex % 2 === 0 ? 'even-row' : 'odd-row'}`}>
                        {renderFieldLabel(field)}
                    </div>
                ))}
            </div>
            <div className="model-columns-container" style={{ overflowX: data.length > 2 ? 'auto' : 'hidden' }}>
                <div className="model-columns">
                    {data.map((model, index) => (
                        <div key={index} className="model-column">
                            <h3 className="model-title">{model.model}</h3>
                            {filteredFields.map((field, fieldIndex) => (
                                renderModelValue(model[field]) !== null && (
                                    <div key={fieldIndex} className={`value-cell ${fieldIndex % 2 === 0 ? 'even-row' : 'odd-row'} scrollable-cell`}>
                                        {renderModelValue(model[field])}
                                    </div>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ModelDetailsTable.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    fieldMappings: PropTypes.object,
    imageMappings: PropTypes.object,
};

ModelDetailsTable.defaultProps = {
    fieldMappings: {},
    imageMappings: {},
};

export default ModelDetailsTable;
