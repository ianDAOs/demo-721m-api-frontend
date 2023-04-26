import React from 'react';

export default function Title({ metadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    // Get the required attributes
    const productAttribute = metadata.attributes.find(attr => attr.trait_type === 'description');
    const badgeAttribute = metadata.attributes.find(attr => attr.trait_type === 'Badge');
    const levelAttribute = metadata.attributes.find(attr => attr.trait_type === 'Level');
    const xpAttribute = metadata.attributes.find(attr => attr.trait_type === 'XP');

    // Get the attribute values
    const product = productAttribute ? productAttribute.value : '';
    const badge = badgeAttribute ? badgeAttribute.value : '';
    const level = levelAttribute ? levelAttribute.value : '';
    const xp = xpAttribute ? xpAttribute.value : '';

    return (
        <div>
            <h1>{product}</h1>
            <p>{badge} L{level} XP{xp}</p>
        </div>
    );
}
