import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api' 
  : '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Properties API
export const propertyAPI = {
  // Get all properties
  getAll: () => api.get('/properties'),
  
  // Get single property
  getById: (id) => api.get(`/properties/${id}`),
  
  // Add new property (admin only)
  create: (propertyData) => api.post('/properties', propertyData),
};

// Contact API
export const contactAPI = {
  // Submit contact form
  submit: (contactData) => api.post('/contact', contactData),
  
  // Get all contacts (admin only)
  getAll: () => api.get('/contact'),
};

export default api;