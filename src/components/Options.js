import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import { styles, colors } from '../data/optionsData';

export default function Options({ metadata, setMetadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    // Get the initial style and color attributes
    const styleAttribute = metadata.attributes.find(attr => attr.trait_type === 'Style');
    const colorAttribute = metadata.attributes.find(attr => attr.trait_type === 'Color');
    const initialStyle = styleAttribute ? styleAttribute.value : '';
    const initialColor = colorAttribute ? colorAttribute.value : '';

    // useState React hooks for style and color
    const [currentStyle, setCurrentStyle] = useState(initialStyle);
    const [currentColor, setCurrentColor] = useState(initialColor);

    useEffect(() => {
        // Update the style and color attributes while preserving other metadata fields and values
        setMetadata(prevMetadata => ({
            ...prevMetadata,
            attributes: prevMetadata.attributes.map(attr => {
                if (attr.trait_type === 'Style') {
                    return { ...attr, value: currentStyle };
                } else if (attr.trait_type === 'Color') {
                    return { ...attr, value: currentColor };
                }
                return attr;
            }),
        }));
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
