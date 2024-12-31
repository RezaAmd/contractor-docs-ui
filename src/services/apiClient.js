import axios from 'axios';

console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL); // Add this line to verify

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use the environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createProject = async (projectData) => {
  try {
    const response = await apiClient.post('/manage/project/create', projectData);
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const getAllProjects = async () => {
  try {
    const response = await apiClient.get('/manage/project/getAll');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const createMaterial = async (materialData) => {
  try {
    const response = await apiClient.post('/manage/material/create', materialData);
    return response.data;
  } catch (error) {
    console.error('Error creating material:', error);
    throw error;
  }
};

export const createEquipment = async (equipmentData) => {
  try {
    const response = await apiClient.post('/manage/equipment/create', equipmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating equipment:', error);
    throw error;
  }
};

export default apiClient;