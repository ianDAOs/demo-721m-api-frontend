import React from 'react';

export default function SelectorButton({ buttonLabel, onClick }) {
    return (
        <button onClick={onClick} className='text-indigo-400 text-sm font-light justify-center md:justify-start'>{buttonLabel}</button>
    );
}