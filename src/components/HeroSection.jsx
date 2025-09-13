import React from 'react';

const HeroSection = ({ navigateTo }) => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(17, 53, 55, 0.7), rgba(17, 53, 55, 0.5)), url('https://images.unsplash.com/photo-15827195084a1-905c673771fd?q=80&w=2825&auto=format=fit=crop')" }}>
      <div className="text-center text-white px-4">
        <h1 className="font-clash text-5xl md:text-7xl font-bold leading-tight mb-4">
          Find your stay, <br /> feel completely at home.
        </h1>
        <p className="font-satoshi text-lg md:text-xl text-champagne/90 mb-8 max-w-2xl mx-auto">
          Discover curated villas, hotels, and resorts that feel like they were made just for you.
        </p>
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
          <input type="text" placeholder="Where to? (e.g., Bali)" className="bg-transparent w-full md:w-1/3 placeholder-champagne/70 text-champagne focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1" />
          <input type="date" className="bg-transparent w-full md:w-1/3 text-champagne/70 focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1" />
          <input type="number" placeholder="2 Guests" className="bg-transparent w-full md:w-1/3 placeholder-champagne/70 text-champagne focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1" />
          <button onClick={() => navigateTo('explore')} className="bg-bright-pink text-white font-bold rounded-full w-full md:w-auto px-8 py-3 hover:bg-opacity-90 transition-all transform hover:scale-105">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;