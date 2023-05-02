import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MainModify from '../components/MainModify';
import Footer from '../components/Footer';

export default function Modify() {

    // Get the metadata from the location state
    const location = useLocation();
    const metadata = location.state?.metadata;

    return (
        <div>
            <h1>Modify Page</h1>
            <Header />
            <MainModify metadata={metadata} buttonLabel='Submit Changes' />
            <Footer />
        </div>
    );
}