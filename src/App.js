import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AIRecommendations from './components/AIRecommendations';
import TokenRewards from './components/TokenRewards';
import Marketplace from './components/Marketplace';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AIRecommendations />
      <TokenRewards />
      <Marketplace />
      <Community />
      <Footer />
    </div>
  );
}

export default App;