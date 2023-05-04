import axios from 'axios';
import { BASE_URL } from '../data/config';

// Uploades a image for a given token by calling the backend proxy server that uses Syndicate's APIs
export const uploadImage = async (firstOption, secondOption, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/upload-image/${token}`, { firstOption, secondOption });
        return response;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};