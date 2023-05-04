import React from 'react';
import { Link } from 'react-router-dom';
import { SYN_API_URL } from '../data/config';

// Component for rendering the website footer with links to the documentation and About page
export default function Footer() {
    return (
        <div className='pt-12 pb-14 text-center font-thin text-white'>
            <p className='pb-4 text-3xl'>✺</p>
            <p className='px-6 text-xs'>This demo is built on ERC-721M and Syndicate{`'`}s APIs {`(`}<a href={SYN_API_URL} className='text-sky-400'>view documentation</a>{`)`} with only React, Javascript, CSS, and HTML. <Link to='/about' className='text-sky-400'>Click here to Learn More.</Link></p>
        </div>
    );
}