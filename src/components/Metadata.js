import React from 'react';

export default function Metadata({ metadata }) {
    return (
        <div>
            <p>
                Token
                {'{'}
                chainId: 1,
                contractAddress: "0xca206cc53e533838f9edc4c25605ec475f0bbcef",
                tokenId: "1",
                {'}'}
            </p>
            <p>
                Metadata
                {'{'}
                "description":"{metadata.description}",
                "image":"{metadata.image}",
                "updated":"{metadata.updated}",
                "attributes": [
                {metadata.attributes.map((attr, index) => (
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
        </div>
    );
}
