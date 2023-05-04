import axios from 'axios';
import { BASE_URL } from '../data/config';

// Updates the metadata for a given token by calling the backend proxy server that uses Syndicate's APIs
export const updateMetadata = async (metadata, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/update-metadata/${token}`, metadata);
        return response;
    } catch (error) {
        console.error('Error updating token metadata:', error);
        throw error;
    }
};