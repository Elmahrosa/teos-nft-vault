import React from 'react';
import { useMint } from '../hooks/useMint';

const MintSection: React.FC = () => {
    const { mintNFT, loading } = useMint();

    const handleMint = async () => {
        await mintNFT();
    };

    return (
        <div className="mint-section">
            <button onClick={handleMint} disabled={loading}>
                {loading ? 'Minting...' : 'Mint NFT'}
            </button>
        </div>
    );
};

export default MintSection;
