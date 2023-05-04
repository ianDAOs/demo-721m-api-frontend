import React from 'react';

// Component for rendering the selector buttons for the NFT metadata modify options
export default function SelectorButton({ buttonLabel, onClick }) {
    return (
        <button onClick={onClick} className='text-indigo-400 text-sm font-light'>{buttonLabel}</button>
    );
}