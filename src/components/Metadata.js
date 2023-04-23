import React from 'react';

export default function Metadata({ metadata }) {
    return (
        <div>
            <p>
                {'{'}
                "name":{metadata.name},
                "style":{metadata.style},
                "color":{metadata.color},
                "badge":{metadata.badge},
                "level":{metadata.level},
                "XP":{metadata.XP},
                "updated":{metadata.updated}
                {'}'}
            </p>
        </div>
    );
}