import axios from 'axios';
import { BASE_URL } from '../data/config';

export const updateMetadata = async (metadata) => {
    try {
        const response = await axios.post(`${BASE_URL}/update-metadata`, metadata);
        return response;
    } catch (error) {
        console.error('Error updating token metadata:', error);
        throw error;
    }
};