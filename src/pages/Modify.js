import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MainModify from '../components/MainModify';
import Footer from '../components/Footer';

// Component for rendering the Modify NFT page
export default function Modify() {

    // Get the metadata from the location state
    const location = useLocation();
    const metadata = location.state?.metadata;
    const token = location.state?.token;

    return (
        <div>
            <Header />
            <MainModify metadata={metadata} token={token} buttonLabel='Submit Changes' />
            <Footer />
        </div>
    );
}