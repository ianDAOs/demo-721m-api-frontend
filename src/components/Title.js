import React from 'react';

export default function Title({ metadata }) {

    // const [title, setTitle] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://m-demo-384522.uc.r.appspot.com');
    //             const data = await response.json();
    //             setTitle(data.name);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <div>
            <h1>{metadata.title}</h1>
            <p>{metadata.badge} L{metadata.level} XP{metadata.XP}</p>
        </div>
    );
}