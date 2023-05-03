import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import { styles, colors, events, types } from '../data/optionsData';
import { findAttribute } from '../helpers/findAttribute';

export default function Options({ metadata, setMetadata, token }) {

    let firstOption, secondOption, firstOptionsArray, secondOptionsArray, initialFirstOption, initialSecondOption;

    if (token === 1) {
        firstOption = 'Color';
        secondOption = 'Style';
        firstOptionsArray = colors;
        secondOptionsArray = styles;
    } else if (token === 2) {
        firstOption = 'Event';
        secondOption = 'Type';
        firstOptionsArray = events;
        secondOptionsArray = types;
    } else {
        firstOption = 'Color';
        secondOption = 'Style';
        firstOptionsArray = colors;
        secondOptionsArray = styles;
    }

    initialFirstOption = metadata ? findAttribute(metadata.attributes, firstOption) : '';
    initialSecondOption = metadata ? findAttribute(metadata.attributes, secondOption) : '';

    const [currentFirstOption, setCurrentFirstOption] = useState(initialFirstOption);
    const [currentSecondOption, setCurrentSecondOption] = useState(initialSecondOption);

    useEffect(() => {
        // Update the style and color attributes while preserving other metadata fields and values
        setMetadata(prevMetadata => ({
            ...prevMetadata,
            attributes: prevMetadata.attributes.map(attr => {
                if (attr.trait_type === firstOption) {
                    return { ...attr, value: currentFirstOption };
                } else if (attr.trait_type === secondOption) {
                    return { ...attr, value: currentSecondOption };
                }
                return attr;
            }),
        }));
    }, [firstOption, secondOption, currentFirstOption, currentSecondOption, setMetadata]);

    return (
        <div>
            <Selector
                label={firstOption}
                options={firstOptionsArray}
                currentOption={currentFirstOption}
                setCurrentOption={setCurrentFirstOption}
            />
            <Selector
                label={secondOption}
                options={secondOptionsArray}
                currentOption={currentSecondOption}
                setCurrentOption={setCurrentSecondOption}
            />
        </div>
    );
}