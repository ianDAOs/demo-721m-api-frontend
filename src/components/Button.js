import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateMetadata } from '../services/updateMetadataService';
import { uploadImage } from '../services/uploadImageService';
import { findAttribute } from '../helpers/findAttribute';

export default function Button({ metadata, buttonLabel }) {

    const navigate = useNavigate();

    // Handle the click event, make the API call, then navigate to the change page
    const handleClick = async () => {

        if (buttonLabel === 'Submit') {
            // Navigate to the loading page
            navigate('/loading');

            // Check if metadata and metadata.attributes are available
            if (metadata && metadata.attributes) {
                // Upload the image
                try {

                    const style = findAttribute(metadata.attributes, "Style");
                    const color = findAttribute(metadata.attributes, "Color");

                    const productDescription = `${color} ${style}`;

                    const uploadResponse = await uploadImage(style, color);

                    const ipfsHash = uploadResponse.data.ipfsHash;

                    // Generate the full image URL with the IPFS hash
                    const imageUrl = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;

                    // Update the metadata with the new image URL
                    const updatedMetadata = { ...metadata, description: productDescription, image: imageUrl };
                    const updateResponse = await updateMetadata(updatedMetadata);

                    // Check for a successful response
                    if (updateResponse.status === 200) {
                        // Wait for the loading animation to finish, then navigate to the home page
                        setTimeout(() => {
                            navigate('/');
                        }, 8000); // Adjust this value according to your loading animation duration
                    } else {
                        console.error('Error updating token metadata:', updateResponse);
                    }
                } catch (error) {
                    console.error('Error uploading image and updating token metadata:', error);
                }
            }
        } else if (buttonLabel === 'Click to Modify NFT') {
            // Navigate to the /modify route
            navigate('/modify', { state: { metadata } });
        }
    };

    return (
        <div className='flex justify-center md:justify-start pt-8'>
            <button onClick={handleClick} className='block rounded-2xl w-80 py-3 bg-emerald-500 hover:bg-emerald-200 text-white text-lg font-light'>{buttonLabel}</button>
        </div>
    );
}
