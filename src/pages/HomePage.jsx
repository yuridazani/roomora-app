import React from 'react';

import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import CategorySection from '../components/CategorySection';
import PromoSection from '../components/PromoSection';

const HomePage = ({ navigateTo }) => {
  return (
    <>
      {/* Navbar tidak lagi di sini, karena akan dirender di App.jsx */}
      <HeroSection navigateTo={navigateTo} />
      <FeaturedDestinations />
      <CategorySection />
      <PromoSection />
    </>
  );
};

export default HomePage;