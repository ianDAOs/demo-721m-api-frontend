import React from 'react';

export default function SelectorButton({ buttonLabel, onClick }) {
    return (
        <button onClick={onClick} className='text-emerald-400 text-sm font-light'>{buttonLabel}</button>
    );
}