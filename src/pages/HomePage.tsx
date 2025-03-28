import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import AdminPortal from '../components/AdminPortal';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <AdminPortal />
    </>
  );
};

export default HomePage;