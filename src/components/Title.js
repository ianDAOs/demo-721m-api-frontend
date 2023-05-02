import React from 'react';
import { findAttribute } from '../helpers/findAttribute';

export default function Title({ metadata }) {

    if (!metadata || !metadata.attributes) {
        return (
            <div>
                <div className='pt-8'></div>
                <button className='mx-auto block rounded-full bg-sky-500 text-center text-sm font-thin text-white p-2 px-4'>ERC-721M NFT</button>
                <h1 className='text-center text-4xl font-thin text-white pt-8 pb-2'>Loading...</h1>
                <p className='text-center text-md font-thin text-stone-400 pb-12'>Loading...</p>
            </div>
        );
    }

    // Get the required attributes
    const badge = findAttribute(metadata.attributes, 'Badge');
    const level = findAttribute(metadata.attributes, 'Level');
    const xp = findAttribute(metadata.attributes, 'XP');

    return (
        <div>
            <div className='pt-8'></div>
            <button className='mx-auto block rounded-full bg-sky-500 text-center text-xs font-thin text-white py-2 px-4'>ERC-721M NFT</button>
            <h1 className='text-center text-4xl font-thin text-white pt-8 pb-2'>{metadata.description}</h1>
            <p className='text-center text-md font-thin text-stone-400 pb-12'>{badge} L{level} XP{xp}</p>
        </div>
    );
}