import React from 'react';
import Hero from './components/Hero';
import MintSection from './components/MintSection';
import About from './components/About';
import Vault from './components/Vault';

const App: React.FC = () => {
    return (
        <div className="App">
            <Hero />
            <MintSection />
            <About />
            <Vault />
        </div>
    );
};

export default App;
