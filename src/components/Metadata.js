import React from 'react';
import { chainId, contractAddress, tokenId } from '../data/contractData';

export default function Metadata({ metadata }) {

    return (
        <div className='text-white text-xs font-mono font-light'>
            <div>
                <p>{'{'} </p>
                <div>
                    <span className='pl-4 text-sky-400'>"chainId"</span>
                    <span className='text-white'>: </span>
                    <span className='text-rose-400'>{chainId}</span>
                    <span className='text-white'>,</span>
                </div>
                <div>
                    <span className='pl-4 text-sky-400'>"contractAddress"</span>
                    <span className='text-white'>: </span>
                    <span className='text-emerald-300'>"{contractAddress}"</span>
                    <span className='text-white'>,</span>
                </div>
                <div>
                    <span className='pl-4 text-sky-400'>"tokenId"</span>
                    <span className='text-white'>: </span>
                    <span className='text-emerald-300'>"{tokenId}"</span>
                    <span className='text-white'>,</span>
                </div>
                <p>{'}'} </p>
            </div>
            {metadata && (

                <div className='pt-8'>
                    <p>{'{'} </p>
                    <div>
                        <span className='pl-4 text-sky-400'>"description"</span>
                        <span className='text-white'>: </span>
                        <span className='text-emerald-300'>"{metadata.description}"</span>
                        <span className='text-white'>,</span>
                    </div>
                    <div>
                        <span className='pl-4 text-sky-400'>"image"</span>
                        <span className='text-white'>: </span>
                        <span className='text-emerald-300'>"{metadata.image}"</span>
                        <span className='text-white'>,</span>
                    </div>
                    <div>
                        <span className='pl-4 text-sky-400'>"updated"</span>
                        <span className='text-white'>: </span>
                        <span className='text-emerald-300'>"{metadata.updated}"</span>
                        <span className='text-white'>,</span>
                    </div>
                    <p className='pl-4'> "attributes": [
                        {metadata.attributes && metadata.attributes.map((attr, index) => (
                            <React.Fragment key={index}>
                                <span>
                                    {"{"}
                                    "trait_type": "{attr.trait_type}",
                                    "value": {JSON.stringify(attr.value)},
                                    {attr.display_type && (
                                        <>
                                            "display_type": "{attr.display_type}",
                                        </>
                                    )}
                                    {attr.max_value && (
                                        <>
                                            "max_value": {attr.max_value},
                                        </>
                                    )}
                                    {"}"}
                                </span>
                                {index !== metadata.attributes.length - 1 && <>, </>}
                            </React.Fragment>
                        ))}
                        ]
                    </p>
                    <p>{'}'} </p>
                </div>

            )}
        </div>
    );
}
