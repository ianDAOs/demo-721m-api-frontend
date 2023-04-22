import React, { useState, useEffect } from 'react';

export default function Title() {

    const [title, setTitle] = useState('');

    // Fetch the title from the Syndicate API and set it in state
    useEffect(() => {
        const fetchTitle = async () => {
            const response = await fetch('https://meta-data-usvsm2urta-uc.a.run.app/1/0xca206cc53e533838f9edc4c25605ec475f0bbcef/1');
            const data = await response.json();
            setTitle(data.name);
        };
        fetchTitle();
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <p>Gold L3 XP65</p>
        </div>
    );
}