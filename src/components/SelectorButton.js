import React from 'react';

export default function SelectorButton({ buttonLabel, onClick }) {
    return (
        <button onClick={onClick}>{buttonLabel}</button>
    );
}