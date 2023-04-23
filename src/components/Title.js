import React, { useState, useEffect } from 'react';

export default function Title() {

    const [title, setTitle] = useState('');

    // Fetch the title from the Syndicate API and set it in state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://m-demo-384522.uc.r.appspot.com');
                const data = await response.json();
                setTitle(data.name);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <p>Gold L3 XP65</p>
        </div>
    );
}
