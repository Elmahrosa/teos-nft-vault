import { useWallet } from '@solana/wallet-adapter-react';

export default function MintPage() {
  const { publicKey } = useWallet();

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold">🎨 Teos NFT Vault</h1>
      {publicKey ? (
        <button className="bg-yellow-600 px-4 py-2 mt-4 rounded">
          Mint Pharaoh NFT
        </button>
      ) : (
        <p>Connect Phantom Wallet to access minting.</p>
      )}
    </div>
  );
}
