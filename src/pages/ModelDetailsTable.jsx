import React from 'react';
import PropTypes from 'prop-types';
import './modeltable.css';
import Stitchwidthfromfrontendtype1 from '../assets/svg/fields/Stitchtype1.svg';
import Stitchwidthfromfrontend from '../assets/svg/fields/Stitchtype2.svg';

const ModelDetailsTable = ({ fields, data, fieldMappings, imageMappings, seriesName }) => {
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
        if (value === "Stitch width from front end type1") {
            return <img src={Stitchwidthfromfrontendtype1} alt="Stitch width from front end type1" className="value-image" />;
        }
        if (value === "Stitch width from front end") {
            return <img src={Stitchwidthfromfrontend} alt="Stitch width from front end" className="value-image" />;
        }
        if (typeof value === 'boolean' || /^(TRUE|true|True|FALSE|false|False)$/.test(value)) {
            if (value === true || /^(TRUE|true|True)$/.test(value)) {
                return <span className="check-icon">✓</span>;
            }
            if (value === false || /^(FALSE|false|False)$/.test(value)) {
                return <span className="cross-icon">✗</span>;
            }
        }
        return value !== '*' ? value || '-' : '-';
    };

    // Function to check if a field should be displayed based on the series name and other conditions
    const shouldDisplayField = (field) => {
        const fieldsToHideForHeavyDuty = ['stitchLengthRange'];

        // Check if the series is "Heavy Duty Series"
        if (seriesName === "Heavy Duty Series") {
            // Hide fields that are in fieldsToHideForHeavyDuty
            if (fieldsToHideForHeavyDuty.includes(field)) {
                return false;
            }

            // Hide fields that have a value of 0 and are of type number
            if (typeof data[0][field] === 'number' && data[0][field] === 0) {
                return false;
            }
        }

        const mainModelValue = data[0][field];
        const allSubmodelsFalse = data.slice(1).every((submodel) => submodel[field] === false || submodel[field] === 'FALSE' || submodel[field] === 'false');
        return !(mainModelValue === false && allSubmodelsFalse);
    };

    // Filter out fields that should not be displayed
    const filteredFields = fields.filter((field) =>
        data.some((model) => model[field] !== '*' && model[field] !== undefined && shouldDisplayField(field))
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
    seriesName: PropTypes.string,  // Added seriesName as a prop
};

ModelDetailsTable.defaultProps = {
    fieldMappings: {},
    imageMappings: {},
    seriesName: '',  // Default empty string for seriesName
};

export default ModelDetailsTable;
