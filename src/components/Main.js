import React, { useState, useEffect } from 'react';
import Title from './Title';
import Nft from './Nft';
import Metadata from './Metadata';
import Button from './Button';
import { fetchMetadata } from '../services/getApiService';

export default function Main({ buttonLabel }) {

    const [metadata, setMetadata] = useState({});

    // Fetch data from Syndicate API and set to state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMetadata();
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
            <Button metadata={metadata} buttonLabel={buttonLabel} />
        </div>
    );
}