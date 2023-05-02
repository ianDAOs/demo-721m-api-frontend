import React from 'react';
import { chainId, contractAddress, tokenId } from '../data/contractData';

export default function Metadata({ metadata }) {

    return (
        <div className='text-white text-xs font-mono font-light'>
            <div>
                <p>{'{'} </p>
                <div className='pl-4'>
                    <span className=' text-violet-200'>"chainId"</span>
                    <span>: </span>
                    <span className='text-rose-400'>{chainId}</span>
                    <span>,</span>
                </div>
                <div className='pl-4'>
                    <span className='text-violet-200'>"contractAddress"</span>
                    <span>: </span>
                    <span className='text-emerald-300'>"{contractAddress}"</span>
                    <span>,</span>
                </div>
                <div className='pl-4'>
                    <span className='text-violet-200'>"tokenId"</span>
                    <span>: </span>
                    <span className='text-emerald-300'>"{tokenId}"</span>
                    <span>,</span>
                </div>
                <p>{'}'} </p>
            </div>
            {metadata && (
                <div className='pt-8'>
                    <p>{'{'} </p>
                    <div className='pl-4'>
                        <span className='text-violet-200'>"description"</span>
                        <span>: </span>
                        <span className='text-emerald-300'>"{metadata.description}"</span>
                        <span>,</span>
                    </div>
                    <div className='pl-4'>
                        <span className='text-violet-200'>"image"</span>
                        <span>: </span>
                        <span className='text-emerald-300'>"{metadata.image}"</span>
                        <span>,</span>
                    </div>
                    <div className='pl-4'>
                        <span className='text-violet-200'>"updated"</span>
                        <span>: </span>
                        <span className='text-emerald-300'>"{metadata.updated}"</span>
                        <span>,</span>
                    </div>

                    <div className='pl-4'>
                        <span className='text-violet-200'>"attributes"</span>
                        <span>: {`[`}</span>
                    </div>
                    {metadata.attributes && metadata.attributes.map((attr, index) => (
                        <React.Fragment key={index}>
                            <div className='pl-8'>
                                {"{"}
                                <div className='pl-4'>
                                    <span className='text-violet-200'>"trait_type"</span>
                                    <span>: </span>
                                    <span className='text-emerald-300'>"{attr.trait_type}"</span>
                                    <span>,</span>
                                </div>
                                <div className='pl-4'>
                                    <span className='text-violet-200'>"value"</span>
                                    <span>: </span>
                                    <span className='text-rose-300'>{JSON.stringify(attr.value)}</span>
                                    <span>,</span>
                                </div>
                                {attr.display_type && (
                                    <>
                                        <div className='pl-4'>
                                            <span className='text-violet-200'>"display_type"</span>
                                            <span>: </span>
                                            <span className='text-emerald-300'>"{attr.display_type}"</span>
                                            <span>,</span>
                                        </div>
                                    </>
                                )}
                                {attr.max_value && (
                                    <>
                                        <div className='pl-4'>
                                            <span className='text-violet-200'>"max_value"</span>
                                            <span>: </span>
                                            <span className='text-rose-400'>{attr.max_value}</span>
                                            <span>,</span>
                                        </div>
                                    </>
                                )}
                                {"}"}
                                {index !== metadata.attributes.length - 1 && <>, </>}
                            </div>
                        </React.Fragment>
                    ))}

                    <div className='pl-4'>
                        <span className='text-white'>{`]`}</span>
                    </div>

                    <p>{'}'} </p>
                </div>

            )}
        </div>
    );
}
