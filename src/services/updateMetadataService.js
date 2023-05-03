import axios from 'axios';
import { BASE_URL } from '../data/config';

export const updateMetadata = async (metadata, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/update-metadata/${token}`, metadata);
        return response;
    } catch (error) {
        console.error('Error updating token metadata:', error);
        throw error;
    }
};