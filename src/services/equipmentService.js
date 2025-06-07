import api from './api';

const equipmentService = {
    getAll: async () => {
        try {
            const response = await api.get('/equipment');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    getById: async (id) => {
        try {
            const response = await api.get(`/equipment/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    create: async (equipmentData) => {
        try {
            const response = await api.post('/equipment', equipmentData);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    update: async (id, equipmentData) => {
        try {
            const response = await api.put(`/equipment/${id}`, equipmentData);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    delete: async (id) => {
        try {
            await api.delete(`/equipment/${id}`);
        } catch (error) {
            throw error.response.data;
        }
    },
};

export default equipmentService;