import React from 'react';

import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import CategorySection from '../components/CategorySection';
import PromoSection from '../components/PromoSection';

const HomePage = ({ navigateTo }) => {
  return (
    <>
      <HeroSection navigateTo={navigateTo} />
      <FeaturedDestinations />
      {/* PERBAIKAN: Teruskan 'navigateTo' ke komponen di bawah */}
      <CategorySection navigateTo={navigateTo} />
      <PromoSection navigateTo={navigateTo} />
    </>
  );
};

export default HomePage;