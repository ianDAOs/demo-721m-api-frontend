import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { SYN_API_URL, FRONTEND_REPO_URL, BACKEND_REPO_URL } from '../data/config';
import '../styles/component-fade.css';

// Component for rendering the About page
export default function About() {
    return (
        <CSSTransition in={true} classNames="component-fade" appear={true} timeout={2000}>
            <div className='px-8 pt-10 md:px-36 md:pt-48 text-white text-xl font-thin'>
                <p className='pb-10 text-2xl font-medium'>This is a demo built on ERC-721M and Syndicate's APIs.</p>
                <p className='pb-8'><span className='font-medium'>ERC-721M</span> extends the ERC-721 standard and makes NFTs modular, customizable, and evolvable so they can grow and adapt with internet-native communities over time.</p>
                <p className='pb-8'><span className='font-medium'>Syndicate's APIs</span> enable developers to easily use, update, and integrate ERC-721M into their websites and applications with just Javascript. <a href={SYN_API_URL} className='text-sky-400'>See the documentation.</a></p>
                <p className='pb-8'>This demo site was built with only React, Javascript, CSS, and HTML. See the <a href={FRONTEND_REPO_URL} className='text-sky-400'>frontend</a> and <a href={BACKEND_REPO_URL} className='text-sky-400'>backend proxy server</a>repos on GitHub.</p>
                <Link to='/' className='pt-10 text-2xl text-sky-400 font-medium'>&larr; Go back</Link>
            </div>
        </CSSTransition>
    );
}