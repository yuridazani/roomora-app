import React, { useState } from 'react';

const HeroSection = ({ navigateTo }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    guests: ''
  });

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    navigateTo('explore', {
      initialFilters: {
        searchTerm: searchParams.location,
        checkIn: searchParams.checkIn,
        guests: searchParams.guests
      }
    });
  };

  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(17, 53, 55, 0.5), rgba(17, 53, 55, 0.2)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3')"
      }}
    >
      <div className="text-center text-white px-4">
        {/* Judul lebih kecil di mobile */}
        <h1 className="font-clash text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
          Find your stay, <br /> feel completely at home.
        </h1>

        {/* Paragraf lebih kecil di mobile */}
        <p className="font-satoshi text-base md:text-xl text-champagne/90 mb-8 max-w-2xl mx-auto">
          Discover curated villas, hotels, and resorts that feel like they were made just for you.
        </p>

        {/* Search Bar - Mobile First Design */}
        <div className="max-w-3xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden bg-white/95 backdrop-blur-md p-4 rounded-2xl space-y-4">
            <div className="space-y-3">
              <input
                type="text"
                name="location"
                placeholder="Where to? (e.g., Bali)"
                onChange={handleInputChange}
                className="w-full bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all"
              />
              <input
                type="date"
                name="checkIn"
                onChange={handleInputChange}
                className="w-full bg-white/50 backdrop-blur-sm text-gray-800 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all"
              />
              <input
                type="number"
                name="guests"
                placeholder="2 Guests"
                onChange={handleInputChange}
                className="w-full bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-600 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={handleSearch}
              className="w-full bg-bright-pink text-white font-bold rounded-xl py-4 hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Search
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex bg-white/20 backdrop-blur-md p-3 rounded-full items-center gap-4">
            <input
              type="text"
              name="location"
              placeholder="Where to? (e.g., Bali)"
              onChange={handleInputChange}
              className="bg-transparent w-1/3 placeholder-champagne/70 text-champagne focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1"
            />
            <input
              type="date"
              name="checkIn"
              onChange={handleInputChange}
              className="bg-transparent w-1/3 text-champagne focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1"
            />
            <input
              type="number"
              name="guests"
              placeholder="2 Guests"
              onChange={handleInputChange}
              className="bg-transparent w-1/3 placeholder-champagne/70 text-champagne focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1"
            />
            <button
              onClick={handleSearch}
              className="bg-bright-pink text-white font-bold rounded-full px-8 py-3 hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
