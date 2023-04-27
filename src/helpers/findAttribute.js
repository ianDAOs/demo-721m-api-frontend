export const findAttribute = (attributes, traitType) => {
    const attribute = attributes.find(attr => attr.trait_type === traitType);
    return attribute ? attribute.value : '';
};