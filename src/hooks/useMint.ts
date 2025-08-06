import { useState } from 'react';
import { mintNFTOnBlockchain } from '../services/blockchain';

export const useMint = () => {
    const [loading, setLoading] = useState(false);

    const mintNFT = async () => {
        setLoading(true);
        try {
            await mintNFTOnBlockchain();
        } catch (error) {
            console.error('Minting failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return { mintNFT, loading };
};
