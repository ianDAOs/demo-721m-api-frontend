// Options.js
import React, { useState, useEffect } from 'react';
import Selector from './Selector';

export default function Options({ metadata, setMetadata }) {
    const styles = ['Low-rise sneaker', 'Basketball shoe', 'Running shoe'];
    const [currentStyle, setCurrentStyle] = useState(metadata.style);

    const colors = ['White', 'Black', 'Multicolor'];
    const [currentColor, setCurrentColor] = useState(metadata.color);

    useEffect(() => {
        setMetadata({ ...metadata, style: currentStyle, color: currentColor });
    }, [currentStyle, currentColor]);

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