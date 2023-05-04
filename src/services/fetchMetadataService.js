import axios from 'axios';
import { BASE_URL } from '../data/config';

// Fetches the metadata for a given token
export const fetchMetadata = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/get-metadata/${token}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};