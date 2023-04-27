import React from 'react';
import { findAttribute } from '../helpers/findAttribute';

export default function Title({ metadata }) {

    if (!metadata || !metadata.attributes) {
        return <p>Loading...</p>;
    }

    // Get the required attributes
    const product = findAttribute(metadata.attributes, 'description');
    const badge = findAttribute(metadata.attributes, 'Badge');
    const level = findAttribute(metadata.attributes, 'Level');
    const xp = findAttribute(metadata.attributes, 'XP');

    return (
        <div>
            <h1>{product}</h1>
            <p>{badge} L{level} XP{xp}</p>
        </div>
    );
}
