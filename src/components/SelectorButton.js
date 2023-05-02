import React from 'react';

export default function SelectorButton({ buttonLabel, onClick }) {
    return (
        <button onClick={onClick} className='text-sky-400 text-sm font-extralight'>{buttonLabel}</button>
    );
}