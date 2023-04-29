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
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                    <Nft metadata={metadata} />
                </div>
                <div>
                    <Options metadata={metadata} setMetadata={setMetadata} />
                    <Button metadata={metadata} buttonLabel={buttonLabel} />
                </div>
            </div>
        </div>
    );

}