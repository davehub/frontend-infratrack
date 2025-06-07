import api from './api';

const ticketService = {
  getAll: async () => {
    try {
      const response = await api.get('/tickets');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/tickets/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  create: async (ticketData) => {
    try {
      const response = await api.post('/tickets', ticketData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  update: async (id, ticketData) => {
    try {
      const response = await api.put(`/tickets/${id}`, ticketData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  delete: async (id) => {
    try {
      await api.delete(`/tickets/${id}`);
    } catch (error) {
      throw error.response.data;
    }
  },

  addComment: async (ticketId, comment) => {
    try {
      const response = await api.post(`/tickets/${ticketId}/comments`, { comment });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  changeStatus: async (ticketId, status) => {
    try {
      const response = await api.patch(`/tickets/${ticketId}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default ticketService;