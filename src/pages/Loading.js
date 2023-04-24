import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css';

export default function Loading() {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const steps = [
        'Calling proxy server...',
        'Calling Syndicate API...',
        'Finding ERC-721M contract...',
        'Finding token...',
        'Updating token metadata...',
        'Uploading image...',
        'Mirroring image to IPFS...',
        'Fetching metadata...'
    ];

    useEffect(() => {
        if (currentStep < steps.length) {
            const timer = setTimeout(() => {
                setCompletedSteps([...completedSteps, steps[currentStep]]);
                setCurrentStep(currentStep + 1);
            }, 1000); // Change duration (1000 ms) as needed

            return () => {
                clearTimeout(timer);
            };
        } else {
            // Restart the animation after it finishes
            setCurrentStep(0);
            setCompletedSteps([]);
        }
    }, [currentStep, completedSteps]);

    return (
        <div>
            {completedSteps.map((step, index) => (
                <p key={index} className={styles.fadeIn}>{step}</p>
            ))}
        </div>
    );
}