import axios from 'axios';

const BASE_URL = 'https://api.goldstarsewing.com/api';

// Lockstitch API
export const getLockstitchModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/lockstitch/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lockstitch model schema fields:', error);
        throw error;
    }
};

export const getLockstitchModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/lockstitch`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lockstitch models:', error);
        throw error;
    }
};

export const getLockstitchModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/lockstitch/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching lockstitch model with ID ${id}:`, error);
        throw error;
    }
};

export const createLockstitchModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/lockstitch`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating lockstitch model:', error);
        throw error;
    }
};

export const updateLockstitchModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/lockstitch/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating lockstitch model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteLockstitchModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/lockstitch/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting lockstitch model with ID ${id}:`, error);
        throw error;
    }
};

// Overlock API
export const getOverlockModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/overlock/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching overlock model schema fields:', error);
        throw error;
    }
};

export const getOverlockModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/overlock`);
        return response.data;
    } catch (error) {
        console.error('Error fetching overlock models:', error);
        throw error;
    }
};

export const getOverlockModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/overlock/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching overlock model with ID ${id}:`, error);
        throw error;
    }
};

export const createOverlockModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/overlock`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating overlock model:', error);
        throw error;
    }
};

export const updateOverlockModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/overlock/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating overlock model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteOverlockModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/overlock/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting overlock model with ID ${id}:`, error);
        throw error;
    }
};

// Interlock API
export const getInterlockModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/interlock/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching interlock model schema fields:', error);
        throw error;
    }
};

export const getInterlockModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/interlock`);
        return response.data;
    } catch (error) {
        console.error('Error fetching interlock models:', error);
        throw error;
    }
};

export const getInterlockModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/interlock/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching interlock model with ID ${id}:`, error);
        throw error;
    }
};

export const createInterlockModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/interlock`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating interlock model:', error);
        throw error;
    }
};

export const updateInterlockModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/interlock/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating interlock model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteInterlockModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/interlock/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting interlock model with ID ${id}:`, error);
        throw error;
    }
};

// Heavy Duty API
export const getHeavyDutyModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/heavyDuty/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching heavy duty model schema fields:', error);
        throw error;
    }
};

export const getHeavyDutyModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/heavyDuty`);
        return response.data;
    } catch (error) {
        console.error('Error fetching heavy duty models:', error);
        throw error;
    }
};

export const getHeavyDutyModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/heavyDuty/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching heavy duty model with ID ${id}:`, error);
        throw error;
    }
};

export const createHeavyDutyModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/heavyDuty`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating heavy duty model:', error);
        throw error;
    }
};

export const updateHeavyDutyModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/heavyDuty/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating heavy duty model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteHeavyDutyModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/heavyDuty/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting heavy duty model with ID ${id}:`, error);
        throw error;
    }
};

// Special Series API
export const getSpecialSeriesModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/specialSeries/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching special series model schema fields:', error);
        throw error;
    }
};

export const getSpecialSeriesModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/specialSeries`);
        return response.data;
    } catch (error) {
        console.error('Error fetching special series models:', error);
        throw error;
    }
};

export const getSpecialSeriesModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/specialSeries/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching special series model with ID ${id}:`, error);
        throw error;
    }
};

export const createSpecialSeriesModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/specialSeries`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating special series model:', error);
        throw error;
    }
};

export const updateSpecialSeriesModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/specialSeries/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating special series model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteSpecialSeriesModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/specialSeries/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting special series model with ID ${id}:`, error);
        throw error;
    }
};

// Zigzag API
export const getZigzagModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/zigzag/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching zigzag model schema fields:', error);
        throw error;
    }
};

export const getZigzagModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/zigzag`);
        return response.data;
    } catch (error) {
        console.error('Error fetching zigzag models:', error);
        throw error;
    }
};

export const getZigzagModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/zigzag/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching zigzag model with ID ${id}:`, error);
        throw error;
    }
};

export const createZigzagModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/zigzag`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating zigzag model:', error);
        throw error;
    }
};

export const updateZigzagModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/zigzag/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating zigzag model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteZigzagModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/zigzag/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting zigzag model with ID ${id}:`, error);
        throw error;
    }
};

// Cutting API
export const getCuttingModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cuttingseries/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cutting model schema fields:', error);
        throw error;
    }
};

export const getCuttingModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cuttingseries`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cutting models:', error);
        throw error;
    }
};

export const getCuttingModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/cuttingseries/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching cutting model with ID ${id}:`, error);
        throw error;
    }
};

export const createCuttingModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/cuttingseries`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating cutting model:', error);
        throw error;
    }
};

export const updateCuttingModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/cuttingseries/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating cutting model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteCuttingModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/cuttingseries/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting cutting model with ID ${id}:`, error);
        throw error;
    }
};

// Cutting Machine API
export const getCuttingMachineModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cuttingmachine/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cutting machine model schema fields:', error);
        throw error;
    }
};

export const getCuttingMachineModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cuttingmachine`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cutting machine models:', error);
        throw error;
    }
};

export const getCuttingMachineModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/cuttingmachine/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching cutting machine model with ID ${id}:`, error);
        throw error;
    }
};

export const createCuttingMachineModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/cuttingmachine`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating cutting machine model:', error);
        throw error;
    }
};

export const updateCuttingMachineModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/cuttingmachine/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating cutting machine model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteCuttingMachineModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/cuttingmachine/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting cutting machine model with ID ${id}:`, error);
        throw error;
    }
};

// Fusing Machine API
export const getFusingMachineModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fusingmachine/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fusing machine model schema fields:', error);
        throw error;
    }
};

export const getFusingMachineModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/fusingmachine`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fusing machine models:', error);
        throw error;
    }
};

export const getFusingMachineModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/fusingmachine/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching fusing machine model with ID ${id}:`, error);
        throw error;
    }
};

export const createFusingMachineModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/fusingmachine`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating fusing machine model:', error);
        throw error;
    }
};

export const updateFusingMachineModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/fusingmachine/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating fusing machine model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteFusingMachineModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/fusingmachine/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting fusing machine model with ID ${id}:`, error);
        throw error;
    }
};

// Heat Transfer API
export const getHeatTransferModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/heattransfer/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching heat transfer model schema fields:', error);
        throw error;
    }
};

export const getHeatTransferModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/heattransfer`);
        return response.data;
    } catch (error) {
        console.error('Error fetching heat transfer models:', error);
        throw error;
    }
};

export const getHeatTransferModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/heattransfer/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching heat transfer model with ID ${id}:`, error);
        throw error;
    }
};

export const createHeatTransferModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/heattransfer`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating heat transfer model:', error);
        throw error;
    }
};

export const updateHeatTransferModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/heattransfer/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating heat transfer model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteHeatTransferModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/heattransfer/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting heat transfer model with ID ${id}:`, error);
        throw error;
    }
};

// Needle Detector API
export const getNeedleDetectorModelSchemaFields = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/needledetector/schema/fields`);
        return response.data;
    } catch (error) {
        console.error('Error fetching needle detector model schema fields:', error);
        throw error;
    }
};

export const getNeedleDetectorModels = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/needledetector`);
        return response.data;
    } catch (error) {
        console.error('Error fetching needle detector models:', error);
        throw error;
    }
};

export const getNeedleDetectorModelById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/needledetector/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching needle detector model with ID ${id}:`, error);
        throw error;
    }
};

export const createNeedleDetectorModel = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/needledetector`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating needle detector model:', error);
        throw error;
    }
};

export const updateNeedleDetectorModel = async (id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/needledetector/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating needle detector model with ID ${id}:`, error);
        throw error;
    }
};

export const deleteNeedleDetectorModel = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/needledetector/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting needle detector model with ID ${id}:`, error);
        throw error;
    }
};

// Series API
export const getSeries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/series`);
        return response.data;
    } catch (error) {
        console.error('Error fetching series:', error);
        throw error;
    }
};

export const getSeriesById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/series/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching series with ID ${id}:`, error);
        throw error;
    }
};

export const createSeries = async (series) => {
    try {
        const response = await axios.post(`${BASE_URL}/series`, series, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating series:', error);
        throw error;
    }
};

export const updateSeries = async (id, series) => {
    try {
        const response = await axios.put(`${BASE_URL}/series/${id}`, series, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating series with ID ${id}:`, error);
        throw error;
    }
};

export const deleteSeries = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/series/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting series with ID ${id}:`, error);
        throw error;
    }
};

export const deleteAllSeries = async () => {
    try {
        const response = await axios.delete(`${BASE_URL}/series`);
        return response.data;
    } catch (error) {
        console.error('Error deleting all series:', error);
        throw error;
    }
};
