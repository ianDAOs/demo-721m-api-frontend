import React, { useState } from 'react';
import Title from './Title';
import Nft from './Nft';
import Options from './Options';
import Button from './Button';

export default function MainModify({ initialMetadata, buttonLabel }) {

    const [metadata, setMetadata] = useState(initialMetadata);

    return (
        <div>
            <Title metadata={metadata} />
            <Nft />
            <Options metadata={metadata} setMetadata={setMetadata} />
            <Button metadata={metadata} buttonLabel={buttonLabel} />
        </div>
    );

}
