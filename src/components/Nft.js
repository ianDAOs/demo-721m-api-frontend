import React from 'react';
import { findAttribute } from '../helpers/findAttribute';

export default function Nft({ metadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    // Get the style and color attributes
    const style = findAttribute(metadata.attributes, 'Style');
    const color = findAttribute(metadata.attributes, 'Color');

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