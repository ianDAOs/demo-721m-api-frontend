import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/change');
    };

    return (
        <button onClick={handleClick}>Modify NFT</button>
    );
}