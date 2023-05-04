import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Title from './Title';
import Nft from './Nft';
import Metadata from './Metadata';
import Button from './Button';
import { routeToToken } from '../helpers/routeToToken';
import { fetchMetadata } from '../services/fetchMetadataService';

// Component for rendering the main section of the website with the NFT image, metadata, and buttons
export default function Main({ buttonLabel }) {

    // React hooks for setting the metadata state and getting the token from the route
    const [metadata, setMetadata] = useState({});
    const location = useLocation();
    const token = routeToToken(location.pathname);

    // Fetch data from Syndicate API and set to metadata state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMetadata(token);
                setMetadata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [location, token]);

    return (
        <div>
            <Title metadata={metadata} token={token} />
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 justify-stretch'>
                <div>
                    <Nft metadata={metadata} token={token} />
                </div>
                <div className='md:pl-12 pl-6 md:pr-20 pr-6 whitespace-normal overflow-wrap break-all'>
                    <Metadata metadata={metadata} />
                    <Button metadata={metadata} token={token} buttonLabel={buttonLabel} />
                </div>
            </div>

        </div>
    );
}