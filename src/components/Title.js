import React from 'react';

export default function Title({ metadata }) {

    return (
        <div>
            <h1>{metadata.name}</h1>
            <p>{metadata.badge} L{metadata.level} XP{metadata.XP}</p>
        </div>
    );
}