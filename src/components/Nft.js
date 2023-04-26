import React from 'react';

export default function Nft({ metadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    // Get the style and color attributes
    const styleAttribute = metadata.attributes.find(attr => attr.trait_type === 'Style');
    const colorAttribute = metadata.attributes.find(attr => attr.trait_type === 'Color');
    const style = styleAttribute ? styleAttribute.value : '';
    const color = colorAttribute ? colorAttribute.value : '';

    return (
        <div>
            {metadata.image ? (
                <img src={metadata.image} alt={`${color} ${style}`} />
            ) : (
                <p>No image available</p>
            )}
            <p>View on <a href='https://opensea.io/assets/ethereum/0xca206cc53e533838f9edc4c25605ec475f0bbcef/1'>Opensea</a> IPFS</p>
            <p>Note: Updates may take time to appear on other platforms</p>
        </div>
    );
}