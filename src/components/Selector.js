import React from 'react';
import SelectorButton from './SelectorButton';

export default function Selector({ label, options, currentOption, setCurrentOption }) {

    // Function to change the current option within the array
    const handleOptionChange = (delta) => {
        const currentIndex = options.indexOf(currentOption);
        const nextIndex = (currentIndex + delta + options.length) % options.length;
        setCurrentOption(options[nextIndex]);
    };

    return (
        <div className='flex justify-center md:justify-start pt-8'>
            <SelectorButton buttonLabel="Prev" onClick={() => handleOptionChange(-1)} />
            <p className='py-3 text-md text-white font-mono font-light text-emerald-300'>{label}: {currentOption}</p>
            <SelectorButton buttonLabel="Next" onClick={() => handleOptionChange(1)} />
        </div>
    );
}