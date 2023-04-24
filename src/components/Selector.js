import React from 'react';
import OptionButton from './OptionButton';

export default function Selector({ label, options, currentOption, setCurrentOption }) {
    const handleOptionChange = (delta) => {
        const currentIndex = options.indexOf(currentOption);
        const nextIndex = (currentIndex + delta + options.length) % options.length;
        setCurrentOption(options[nextIndex]);
    };

    return (
        <div>
            <OptionButton label="Prev" onClick={() => handleOptionChange(-1)} />
            <p>{label}: {currentOption}</p>
            <OptionButton label="Next" onClick={() => handleOptionChange(1)} />
        </div>
    );
}