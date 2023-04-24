import React from 'react';

export default function OptionButton({ buttonLabel, onClick }) {
    return <button onClick={onClick}>{buttonLabel}</button>;
}