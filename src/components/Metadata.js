import React from 'react';
import { chainId, contractAddress, tokenId } from '../data/contractData';

export default function Metadata({ metadata }) {
    return (
        <div>
            <p>
                Token
                {'{'}
                chainId: {chainId},
                contractAddress: "{contractAddress}",
                tokenId: "{tokenId}",
                {'}'}
            </p>
            {metadata && (
                <p>
                    Metadata
                    {'{'}
                    "description":"{metadata.description}",
                    "image":"{metadata.image}",
                    "updated":"{metadata.updated}",
                    "attributes": [
                    {metadata.attributes && metadata.attributes.map((attr, index) => (
                        <React.Fragment key={index}>
                            <span>
                                {"{"}
                                "trait_type": "{attr.trait_type}",
                                "value": {JSON.stringify(attr.value)},
                                {attr.display_type && (
                                    <>
                                        "display_type": "{attr.display_type}",
                                    </>
                                )}
                                {attr.max_value && (
                                    <>
                                        "max_value": {attr.max_value},
                                    </>
                                )}
                                {"}"}
                            </span>
                            {index !== metadata.attributes.length - 1 && <>, </>}
                        </React.Fragment>
                    ))}
                    ]
                    {'}'}
                </p>
            )}
        </div>
    );
}
