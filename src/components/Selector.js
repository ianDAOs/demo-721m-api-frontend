import React from 'react';
import SelectorButton from './SelectorButton';

export default function Selector({ label, options, currentOption, setCurrentOption }) {
    const handleOptionChange = (delta) => {
        const currentIndex = options.indexOf(currentOption);
        const nextIndex = (currentIndex + delta + options.length) % options.length;
        setCurrentOption(options[nextIndex]);
    };

    return (
        <div>
            <SelectorButton buttonLabel="Prev" onClick={() => handleOptionChange(-1)} />
            <p>{label}: {currentOption}</p>
            <SelectorButton buttonLabel="Next" onClick={() => handleOptionChange(1)} />
        </div>
    );
}