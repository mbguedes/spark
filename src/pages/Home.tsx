import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#1a2248] to-[#0a1128]">
      <Navigation />
      <Hero />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;