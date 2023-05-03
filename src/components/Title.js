import React from 'react';
import { findAttribute } from '../helpers/findAttribute';

export default function Title({ metadata, token }) {

    let first, second, third;

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

    if (token === 1) {
        first = findAttribute(metadata.attributes, 'Badge');
        second = "L" + findAttribute(metadata.attributes, 'Level');
        third = "XP" + findAttribute(metadata.attributes, 'XP');
    } else if (token === 2) {
        first = findAttribute(metadata.attributes, 'Member');
        second = "T" + findAttribute(metadata.attributes, 'Tier');
        third = "P" + findAttribute(metadata.attributes, 'Points');
    } else {
        first = findAttribute(metadata.attributes, 'Badge');
        second = "L" + findAttribute(metadata.attributes, 'Level');
        third = "XP" + findAttribute(metadata.attributes, 'XP');
    }

    return (
        <div>
            <div className='pt-8'></div>
            <button className='mx-auto block rounded-full bg-sky-500 text-center text-sm font-thin text-white py-2 px-4'>ERC-721M NFT</button>
            <h1 className='text-center text-4xl font-thin text-white pt-8 pb-2'>{metadata.description}</h1>
            <p className='text-center text-md font-thin text-stone-400 pb-12'>{first} {second} {third}</p>
        </div>
    );
}