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
        <div className='flex grid grid-rows-3 justify-center md:justify-start pt-8 pb-4'>
            <SelectorButton buttonLabel="Prev" onClick={() => handleOptionChange(-1)} />
            <p className='py-1 text-lg text-white font-mono font-light '>{label}: {currentOption}</p>
            <SelectorButton buttonLabel="Next" onClick={() => handleOptionChange(1)} />
        </div>
    );
}