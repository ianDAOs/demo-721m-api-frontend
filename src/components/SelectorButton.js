import React from 'react';

export default function SelectorButton({ buttonLabel, onClick }) {
    return (
        <button onClick={onClick} className='text-white text-sm font-extralight'>{buttonLabel}</button>
    );
}