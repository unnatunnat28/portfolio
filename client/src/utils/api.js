import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Contact API
export const submitContact = async (formData) => {
  try {
    const response = await apiClient.post('/api/contact', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Health check
export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/api/health');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
