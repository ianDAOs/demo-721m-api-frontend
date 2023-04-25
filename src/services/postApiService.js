import axios from 'axios';

export const updateMetadata = async (metadata) => {
    try {
        const response = await axios.post('https://m-demo-384522.uc.r.appspot.com/update-metadata', metadata);
        return response;
    } catch (error) {
        console.error('Error updating token metadata:', error);
        throw error;
    }
};
