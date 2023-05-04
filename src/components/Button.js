import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateMetadata } from '../services/updateMetadataService';
import { uploadImage } from '../services/uploadImageService';
import { findAttribute } from '../helpers/findAttribute';

export default function Button({ metadata, buttonLabel, token }) {

    const navigate = useNavigate();

    // Handle the click event, make the API call, then navigate to the change page
    const handleClick = async () => {

        if (buttonLabel === 'Submit Changes') {
            // Navigate to the loading page
            navigate('/loading');

            // Check if metadata and metadata.attributes are available
            if (metadata && metadata.attributes) {
                // Upload the image
                try {

                    let firstOption, secondOption;

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

                    const first = findAttribute(metadata.attributes, firstOption);
                    const second = findAttribute(metadata.attributes, secondOption);

                    const productDescription = `${first} ${second}`;

                    const uploadResponse = await uploadImage(first, second, token);
                    const ipfsHash = uploadResponse.data.ipfsHash;

                    // Generate the full image URL with the IPFS hash
                    const imageUrl = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;

                    // Update the metadata with the new image URL
                    const updatedMetadata = { ...metadata, description: productDescription, image: imageUrl };
                    const updateResponse = await updateMetadata(updatedMetadata, token);

                    // Check for a successful response
                    if (updateResponse.status === 200) {
                        // Wait for the loading animation to finish, then navigate to the home page
                        setTimeout(() => {

                            if (token === 1) {
                                navigate('/');
                            } else if (token === 2) {
                                navigate('/events');
                            } else {
                                navigate('/');
                            }

                        }, 10000); // Adjust this value according to your loading animation duration
                    } else {
                        console.error('Error updating token metadata:', updateResponse);
                    }
                } catch (error) {
                    console.error('Error uploading image and updating token metadata:', error);
                }
            }
        } else if (buttonLabel === 'Click to Modify NFT') {
            // Navigate to the /modify route
            navigate('/modify', { state: { metadata, token } });
        }
    };

    return (
        <div className='flex justify-center md:justify-start pt-8'>
            <button onClick={handleClick} className={`block rounded-2xl w-80 py-4 ${buttonLabel === 'Submit Changes' ? 'bg-indigo-500' : 'bg-emerald-500 hover:bg-emerald-200'} text-white text-md font-light`}>
                {buttonLabel}
            </button>
        </div >
    );
}