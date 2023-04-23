import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MainChange from '../components/MainChange';
import Footer from '../components/Footer';

export default function Change() {

    // Get the metadata from the location state
    const location = useLocation();
    const metadata = location.state?.metadata;

    return (
        <div>
            <h1>Change Page</h1>
            <Header />
            <MainChange metadata={metadata} />
            <Footer />
        </div>
    );
}