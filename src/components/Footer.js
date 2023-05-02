import React from 'react';
import { SYN_API_URL, FRONTEND_REPO_URL } from '../data/config';

export default function Footer() {
    return (
        <div className='overflow-auto pt-8 pb-16 text-center font-thin text-white'>
            <p className='pb-4 text-3xl'>✺</p>
            <p className='text-sm'>This demo {`(`}<a href={FRONTEND_REPO_URL} className='text-sky-400'>frontend repo</a>{`)`} is built with ERC-721M and Syndicate{`'`}s APIs {`(`}<a href={SYN_API_URL} className='text-sky-400'>documentation</a>{`)`}</p>
        </div>
    );
}