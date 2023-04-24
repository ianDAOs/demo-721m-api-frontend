// Options.js
import React, { useState, useEffect } from 'react';
import Selector from './Selector';

export default function Options({ metadata, setMetadata }) {

    const styles = ['Low-rise sneaker', 'Basketball shoe', 'Running shoe'];
    const [currentStyle, setCurrentStyle] = useState(metadata.style);

    const colors = ['White', 'Black', 'Multicolor'];
    const [currentColor, setCurrentColor] = useState(metadata.color);

    useEffect(() => {
        // Preserve other metadata fields/values when updating the state
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