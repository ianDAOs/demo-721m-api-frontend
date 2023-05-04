import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

// Component for rendering the Events page
export default function Events() {
    return (
        <div>
            <Header />
            <Main buttonLabel='Click to Modify NFT' />
            <Footer />
        </div>
    );
}