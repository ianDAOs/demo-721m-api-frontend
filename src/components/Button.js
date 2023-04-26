import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateMetadata } from '../services/updateMetadataService';
import { uploadImage } from '../services/uploadImageService';

export default function Button({ metadata, buttonLabel }) {

    const navigate = useNavigate();

    // Handle the click event, make the API call, then navigate to the change page
    const handleClick = async () => {

        if (buttonLabel === 'Submit') {
            // Navigate to the loading page
            navigate('/loading');

            // Upload the image
            try {

                const style = metadata.attributes.find(attr => attr.trait_type === "Style").value;
                const color = metadata.attributes.find(attr => attr.trait_type === "Color").value;
                const uploadResponse = await uploadImage(style, color);

                const ipfsHash = uploadResponse.data.ipfsHash;

                // Generate the full image URL with the IPFS hash
                const imageUrl = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;

                // Update the metadata with the new image URL
                const updatedMetadata = { ...metadata, image: imageUrl };
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
        } else if (buttonLabel === 'Modify NFT') {
            // Navigate to the /modify route
            navigate('/modify', { state: { metadata } });
        }
    };

    return (
        <button onClick={handleClick}>{buttonLabel}</button>
    );
}
