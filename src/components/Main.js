import React, { useState, useEffect } from 'react';
import Title from './Title';
import Nft from './Nft';
import Metadata from './Metadata';
import Button from './Button';
import { fetchMetadata } from '../services/fetchMetadataService';

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
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 justify-stretch'>
                <div>
                    <Nft metadata={metadata} />
                </div>
                <div className='px-6 whitespace-normal overflow-wrap break-all'>
                    <Metadata metadata={metadata} />
                    <Button metadata={metadata} buttonLabel={buttonLabel} />
                </div>
            </div>

        </div>
    );
}