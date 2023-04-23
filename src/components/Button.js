import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ metadata }) {

    const navigate = useNavigate();

    // Handle the click event, navigate to the change page, and pass the metadata
    const handleClick = () => {
        navigate('/change', { state: { metadata } });
    };

    return (
        <button onClick={handleClick}>Modify NFT</button>
    );
}