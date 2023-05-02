import React from 'react';
import { contractAddress, tokenId } from '../data/contractData';
import { ES_URL } from '../data/config';
import loadingImage from '../assets/images/image_loading.png';

export default function Nft({ metadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    const osUrl = `https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`;

    return (
        <div className='flex md:justify-end sm:justify-center text-white'>
            <div>
                <div className='xl:pl-0 md:pl-6 sm:pl-0 pl-6 pb-2'>
                    <button className='rounded-full outline outline-1 outline-stone-600 px-4 py-2 text-xs font-thin text-white'>NFT Image</button>
                </div>
                {metadata.image ? (
                    <img src={metadata.image} className='md:pl-6 sm:pl-0' alt='NFT visual' />
                ) : (
                    <img src={loadingImage} className='md:pl-6 sm:pl-0' alt='NFT loading visual' />
                )}
                <p className='text-center pt-6 text-sm font-extralight'>View on <a href={osUrl} className='text-sky-400'>Opensea</a> :: <a href={metadata.image} className='text-sky-400'>IPFS</a> :: <a href={ES_URL} className='text-sky-400'>Etherscan</a></p>
                <p className='text-center pt-2 pb-16 text-xs font-extralight text-stone-400'>Note: Updates may take time to appear on other platforms</p>
            </div>
        </div>
    );
}