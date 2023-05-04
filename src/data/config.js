import { contractAddress } from './contractData.js'

// Url for the backend proxy server
export const BASE_URL = 'https://m-demo-384522.uc.r.appspot.com';

// Urls for the NFT on Opensea and Etherscan
export const OS_URL = `https://opensea.io/assets/ethereum/${contractAddress}`;
export const ES_URL = `https://etherscan.io/nft/${contractAddress}`;

// Urls for Syndicate's APIs and the frontend repo on GitHub
export const SYN_API_URL = 'https://docs.syndicate.io';
export const FRONTEND_REPO_URL = 'https://github.com/ianDAOs/demo-721m-api-frontend';
export const BACKEND_REPO_URL = 'https://github.com/ianDAOs/demo-721m-api-backend';