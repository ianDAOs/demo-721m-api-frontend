import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

// Component for rendering the Home page
export default function Home() {
    return (
        <div>
            <Header />
            <Main buttonLabel='Click to Modify NFT' />
            <Footer />
        </div>
    );
}