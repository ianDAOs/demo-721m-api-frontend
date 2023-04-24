import React, { useState } from 'react';
import Selector from './Selector';

export default function Options({ metadata }) {

    // Array with style options and useState hook
    const styles = ['Sneakers', 'Basketball Shoes', 'Running Shoes'];
    const [currentStyle, setCurrentStyle] = useState(metadata.style);

    // Array with color options and useState hook
    const colors = ['White', 'Black', 'Multicolor'];
    const [currentColor, setCurrentColor] = useState(metadata.color);

    return (
        <div>
            <Selector label="Style" options={styles} currentOption={currentStyle} setCurrentOption={setCurrentStyle} />
            <Selector label="Color" options={colors} currentOption={currentColor} setCurrentOption={setCurrentColor} />
        </div>
    );

}
