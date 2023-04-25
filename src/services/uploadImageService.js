import axios from 'axios';
import { BASE_URL } from '../data/config';

export const uploadImage = async (style, color) => {
    try {
        const response = await axios.post(`${BASE_URL}/upload-image`, { style, color });
        return response;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};
