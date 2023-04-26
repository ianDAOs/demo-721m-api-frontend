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
                "product":"{metadata.product}",
                "image":{metadata.image},
                "style":"{metadata.style}",
                "color":"{metadata.color}",
                "badge":"{metadata.badge}",
                "level":"{metadata.level}",
                "xp":"{metadata.xp}",
                "updated":"{metadata.updated}"
                {'}'}
            </p>
        </div>
    );
}