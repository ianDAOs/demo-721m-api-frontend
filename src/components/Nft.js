import React from 'react';
import { contractAddress, tokenId } from '../data/contractData';

export default function Nft({ metadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    const osUrl = `https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`;
    const ipfsUrl = `https://cloudflare-ipfs.com/ipfs/${metadata.image}`;

    return (
        <div>
            {metadata.image ? (
                <img src={metadata.image} alt="NFT visual" />
            ) : (
                <p>No image available</p>
            )}
            <p>View on <a href={osUrl}>Opensea</a> <a href={ipfsUrl}>IPFS</a></p>
            <p>Note: Updates may take time to appear on other platforms</p>
        </div>
    );
}