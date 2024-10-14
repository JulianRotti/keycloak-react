import axios from 'axios';

// Base URL for the API
const BASE_URL = 'http://localhost:5000/api'; // Adjust this if necessary

// Function to get all data
export const getAllData = async (accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/get-data`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching all data:', error);
        throw error;
    }
};

// Function to get data by ID
export const getDataById = async (id, accessToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/get-data/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data by ID ${id}:`, error);
        throw error; 
    }
};

// Function to post new data
export const postData = async (data, accessToken) => {
    try {
        const response = await axios.post(`${BASE_URL}/post-data`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; 
    }
};
