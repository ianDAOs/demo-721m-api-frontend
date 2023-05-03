import axios from 'axios';
import { BASE_URL } from '../data/config';

export const uploadImage = async (firstOption, secondOption, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/upload-image/${token}`, { firstOption, secondOption });
        return response;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};