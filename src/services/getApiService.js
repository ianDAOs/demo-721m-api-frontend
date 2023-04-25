import axios from 'axios';

export const fetchMetadata = async () => {
    try {
        const response = await axios.get('https://m-demo-384522.uc.r.appspot.com/get-metadata');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};