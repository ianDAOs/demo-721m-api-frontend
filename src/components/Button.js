import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { findAttribute } from '../helpers/findAttribute';
import { uploadImage } from '../services/uploadImageService';
import { updateMetadata } from '../services/updateMetadataService';

// Component for rendering the Modify NFT and Submit Changes buttons
export default function Button({ metadata, buttonLabel, token }) {

    const navigate = useNavigate();

    const submitChanges = useCallback(async () => {

        // Navigate to the loading page
        navigate('/loading');

        // Check if metadata and metadata.attributes are available
        if (metadata && metadata.attributes) {
            try {
                let firstOption, secondOption;

                // Check which token is being modified
                if (token === 1) {
                    firstOption = 'Color';
                    secondOption = 'Style';
                } else if (token === 2) {
                    firstOption = 'Event';
                    secondOption = 'Type';
                } else {
                    firstOption = 'Color';
                    secondOption = 'Style';
                }

                // Get the values of the first and second attributes being changed
                const first = findAttribute(metadata.attributes, firstOption);
                const second = findAttribute(metadata.attributes, secondOption);

                // Generate the product description based on the attribute values
                const productDescription = `${first} ${second}`;

                // Upload the image using Syndicate's APIs to IPFS, get the IPFS hash, and generate the image URL
                const uploadResponse = await uploadImage(first, second, token);
                const ipfsHash = uploadResponse.data.ipfsHash;
                const imageUrl = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;

                // Update the metadata using Syndicate's APIs with the new metadata, product description, and image URL
                const updatedMetadata = { ...metadata, description: productDescription, image: imageUrl };
                const updateResponse = await updateMetadata(updatedMetadata, token);

                // Wait 10 seconds and all responses before navigating to the /success route
                if (updateResponse.status === 200) {
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 9000));
                    await Promise.all([updateResponse, timeoutPromise]);

                    // Navigate to the /success route if the API call was successful
                    if (token === 1) {
                        navigate('/');
                    } else if (token === 2) {
                        navigate('/events');
                    } else {
                        navigate('/');
                    }
                } else {
                    console.error('Error updating token metadata:', updateResponse);
                }
            } catch (error) {
                console.error('Error uploading image and updating token metadata:', error);
            }
        }
    }, [metadata, navigate, token]);

    // Navigate to the /modify route if the user is trying to modify an NFT
    const modifyNFT = useCallback(() => {
        navigate('/modify', { state: { metadata, token } });
    }, [metadata, navigate, token]);

    // Handle the click event based on the button label
    const handleClick = buttonLabel === 'Submit Changes' ? submitChanges : modifyNFT;

    return (
        <div className='flex justify-center md:justify-start pt-8'>
            <button onClick={handleClick} className={`block rounded-2xl w-80 py-4 ${buttonLabel === 'Submit Changes' ? 'bg-indigo-500' : 'bg-emerald-500 hover:bg-emerald-200'} text-white text-md font-light`}>
                {buttonLabel}
            </button>
        </div >
    );
}