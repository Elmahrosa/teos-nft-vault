import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const Hero: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('/api/hero');
            setData(result);
        };
        loadData();
    }, []);

    return (
        <div className="hero">
            <h1>Welcome to Teos NFT Vault</h1>
            {data && <p>{data.description}</p>}
        </div>
    );
};

export default Hero;
