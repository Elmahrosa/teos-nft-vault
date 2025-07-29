import { useWallet } from '@solana/wallet-adapter-react';

export default function MintSection() {
  const { publicKey } = useWallet();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-yellow-400">Pharaoh Mint Vault</h2>
      {publicKey ? (
        <button className="mt-4 bg-yellow-600 px-4 py-2 rounded">Mint NFT</button>
      ) : (
        <p className="text-white mt-4">🔐 Connect your Phantom Wallet to mint.</p>
      )}
    </div>
  );
}
