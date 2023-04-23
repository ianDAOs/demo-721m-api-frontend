import React, { useState, useEffect } from 'react';
import Title from './Title';
import Nft from './Nft';
import Metadata from './Metadata';
import Button from './Button';

export default function Main() {

    const [metadata, setMetadata] = useState({});

    // Fetch data from Syndicate API and set to state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://m-demo-384522.uc.r.appspot.com');
                const data = await response.json();
                setMetadata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Title metadata={metadata} />
            <Nft />
            <Metadata metadata={metadata} />
            <Button metadata={metadata} />
        </div>
    );
}