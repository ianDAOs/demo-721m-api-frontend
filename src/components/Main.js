import React, { useState, useEffect } from 'react';
import Title from './Title';
import Nft from './Nft';
import Metadata from './Metadata';
import Button from './Button';

export default function Main() {

    const [metadata, setMetadata] = useState(null);

    // Fetch the title from the Syndicate API and set it in state
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
            <Metadata />
            <Button />
        </div>
    );
}