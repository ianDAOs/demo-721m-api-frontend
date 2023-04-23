import React, { useState, useEffect } from 'react';
import Title from './Title';
import Nft from './Nft';
import Metadata from './Metadata';
import Options from './Options';
import Button from './Button';

export default function MainChange({ metadata }) {

    return (
        <div>
            <Title metadata={metadata} />
            <Nft />
            <Options metadata={metadata} />
            <Button />
        </div>
    );

}