import React, { useState, useEffect } from 'react';
import Selector from './Selector';
import { styles, colors, events, types } from '../data/optionsData';
import { findAttribute } from '../helpers/findAttribute';

// Helper function for getting the options for modifying the NFT's metadata
const getOptions = (token) => {
    if (token === 2) {
        return {
            firstOption: 'Event',
            secondOption: 'Type',
            firstOptionsArray: events,
            secondOptionsArray: types,
        };
    } else {
        return {
            firstOption: 'Color',
            secondOption: 'Style',
            firstOptionsArray: colors,
            secondOptionsArray: styles,
        };
    }
};

// Component for rendering the options for modifying the NFT's metadata
export default function Options({ metadata, setMetadata, token }) {
    const {
        firstOption,
        secondOption,
        firstOptionsArray,
        secondOptionsArray,
    } = getOptions(token);

    // Get the initial values of the first and second attributes being changed
    const initialFirstOption = metadata
        ? findAttribute(metadata.attributes, firstOption)
        : '';
    const initialSecondOption = metadata
        ? findAttribute(metadata.attributes, secondOption)
        : '';

    // React hooks for setting the current values of the first and second attributes being changed
    const [currentFirstOption, setCurrentFirstOption] = useState(
        initialFirstOption
    );
    const [currentSecondOption, setCurrentSecondOption] = useState(
        initialSecondOption
    );

    // Update the metadata state with the current values of the first and second attributes while preserving other metadata fields and values
    useEffect(() => {
        setMetadata((prevMetadata) => ({
            ...prevMetadata,
            attributes: prevMetadata.attributes.map((attr) => {
                if (attr.trait_type === firstOption) {
                    return { ...attr, value: currentFirstOption };
                } else if (attr.trait_type === secondOption) {
                    return { ...attr, value: currentSecondOption };
                }
                return attr;
            }),
        }));
    }, [
        firstOption,
        secondOption,
        currentFirstOption,
        currentSecondOption,
        setMetadata,
    ]);

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