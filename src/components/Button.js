import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Button({ metadata, buttonLabel }) {

    const navigate = useNavigate();

    // Handle the click event, make the API call, then navigate to the change page
    const handleClick = async () => {
        if (buttonLabel === 'Submit') {
            // Navigate to the loading page
            navigate('/loading');

            // Make the API call to your proxy server
            try {
                const response = await axios.post('https://m-demo-384522.uc.r.appspot.com/update-metadata', metadata);

                // Check for a successful response
                if (response.status === 200) {
                    // Wait for the loading animation to finish, then navigate to the home page
                    setTimeout(() => {
                        navigate('/');
                    }, 8000); // Adjust this value according to your loading animation duration
                } else {
                    console.error('Error updating token metadata:', response);
                }
            } catch (error) {
                console.error('Error updating token metadata:', error);
            }
        } else if (buttonLabel === 'Modify NFT') {
            // Navigate to the /modify route
            navigate('/modify', { state: { metadata } });
        }
    };


    return (
        <button onClick={handleClick}>{buttonLabel}</button>
    );
}
