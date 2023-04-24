import React, { useState } from 'react';
import Title from './Title';
import Nft from './Nft';
import Options from './Options';
import Button from './Button';

export default function MainModify({ metadata: initialMetadata, buttonLabel }) {

    const [metadata, setMetadata] = useState(initialMetadata);

    return (
        <div>
            <Title metadata={metadata} />
            <Nft />
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
                    "image":"TBD",
                    "style":"{metadata.style}",
                    "color":"{metadata.color}",
                    "badge":"{metadata.badge}",
                    "level":"{metadata.level}",
                    "XP":"{metadata.XP}",
                    "updated":"{metadata.updated}"
                    {'}'}
                </p>
            </div>
            <Options metadata={metadata} setMetadata={setMetadata} />
            <Button metadata={metadata} buttonLabel={buttonLabel} />
        </div>
    );

}