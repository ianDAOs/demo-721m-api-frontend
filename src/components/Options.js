// Options.js
import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import { styles, colors } from '../data/optionsData';

export default function Options({ metadata, setMetadata }) {

    // useState React hooks for style and color
    const [currentStyle, setCurrentStyle] = useState(metadata.style);
    const [currentColor, setCurrentColor] = useState(metadata.color);

    useEffect(() => {
        // Preserve other metadata fields and values when updating the style and color
        setMetadata(prevMetadata => ({ ...prevMetadata, style: currentStyle, color: currentColor }));
    }, [currentStyle, currentColor, setMetadata]);

    return (
        <div>
            <Selector
                label="Style"
                options={styles}
                currentOption={currentStyle}
                setCurrentOption={setCurrentStyle}
            />
            <Selector
                label="Color"
                options={colors}
                currentOption={currentColor}
                setCurrentOption={setCurrentColor}
            />
        </div>
    );

}