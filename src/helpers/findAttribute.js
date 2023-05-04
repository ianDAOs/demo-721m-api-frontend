// Helper function to find an attribute's value in a metadata object
export const findAttribute = (attributes, traitType) => {

    if (!attributes) {
        return '';
    }

    const attribute = attributes.find(attr => attr.trait_type === traitType);
    return attribute ? attribute.value : '';
};
