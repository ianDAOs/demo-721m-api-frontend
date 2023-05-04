import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Title from './Title';
import Nft from './Nft';
import Options from './Options';
import Button from './Button';
import '../styles/component-fade.css';

// Component for rendering the main section of the website with the NFT image, metadata modify options, and buttons
export default function MainModify({ metadata: initialMetadata, buttonLabel, token }) {

    // React hook for modifying the state of the NFT's metadata
    const [metadata, setMetadata] = useState(initialMetadata);

    return (
        <div>
            <Title metadata={metadata} token={token} />
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 justify-stretch'>
                <div>
                    <Nft metadata={metadata} token={token} />
                </div>
                <div className='md:pl-12 pl-6 md:pr-20 pr-6 whitespace-normal overflow-wrap break-all'>
                    <CSSTransition in={true} classNames="component-fade" appear={true} timeout={2000}>
                        <Options metadata={metadata} setMetadata={setMetadata} token={token} />
                    </CSSTransition>
                    <CSSTransition in={true} classNames="component-fade" appear={true} timeout={2000}>
                        <Button metadata={metadata} token={token} buttonLabel={buttonLabel} />
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}