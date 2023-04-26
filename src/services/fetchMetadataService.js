import axios from 'axios';
import { BASE_URL } from '../data/config';

export const fetchMetadata = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/get-metadata`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};