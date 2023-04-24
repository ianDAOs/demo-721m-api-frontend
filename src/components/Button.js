import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ metadata, buttonLabel }) {

    const navigate = useNavigate();

    // Handle the click event, navigate to the change page, and pass the metadata
    const handleClick = () => {
        navigate('/modify', { state: { metadata } });
    };

    return (
        <button onClick={handleClick}>{buttonLabel}</button>
    );
}