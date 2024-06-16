import {
    getLockstitchModelById,
    getOverlockModelById,
    getInterlockModelById,
    getHeavyDutyModelById,
    getSpecialSeriesModelById,
    getZigzagModelById,
    getCuttingModelById
} from '../services/api';

export const getModelDetailFunction = (modelType) => {
    switch (modelType) {
        case 'Lockstitch':
            return getLockstitchModelById;
        case 'Overlock':
            return getOverlockModelById;
        case 'Interlock':
            return getInterlockModelById;
        case 'HeavyDuty':
            return getHeavyDutyModelById;
        case 'SpecialSeries':
            return getSpecialSeriesModelById;
        case 'Zigzag':
            return getZigzagModelById;
        case 'Cutting':
            return getCuttingModelById;
        default:
            throw new Error(`Unknown model type: ${modelType}`);
    }
};
