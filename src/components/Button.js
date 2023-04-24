import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Button({ metadata, buttonLabel }) {

    const navigate = useNavigate();

    // Handle the click event, make the API call, then navigate to the change page
    const handleClick = async () => {
        if (buttonLabel === 'Submit') {
            // Make the API call to your proxy server
            try {
                const response = await axios.post('https://your-proxy-server-url.com/update-metadata', {
                    style: metadata.style,
                    color: metadata.color
                });

                // Check for a successful response
                if (response.status === 200) {
                    // Navigate to the change page and pass the metadata
                    navigate('/modify', { state: { metadata } });
                } else {
                    console.error('Error updating token metadata:', response);
                }
            } catch (error) {
                console.error('Error updating token metadata:', error);
            }
        } else if (buttonLabel === 'Modify NFT') {
            // Navigate to the /modify route
            navigate('/modify');
        }
    };

    return (
        <button onClick={handleClick}>{buttonLabel}</button>
    );
}