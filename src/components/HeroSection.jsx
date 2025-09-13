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

        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
          <input
            type="text"
            name="location"
            placeholder="Where to? (e.g., Bali)"
            onChange={handleInputChange}
            className="bg-transparent w-full md:w-1/3 placeholder-white/80 text-white focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1"
          />
          <input
            type="date"
            name="checkIn"
            onChange={handleInputChange}
            className="bg-transparent w-full md:w-1/3 text-white focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1 
            [color-scheme:dark]"
          />
          <input
            type="number"
            name="guests"
            placeholder="2 Guests"
            onChange={handleInputChange}
            className="bg-transparent w-full md:w-1/3 placeholder-white/80 text-white focus:outline-none border-b-2 border-transparent focus:border-bright-pink transition-colors px-2 py-1"
          />
          <button
            onClick={handleSearch}
            className="bg-bright-pink text-white font-bold rounded-full w-full md:w-auto px-8 py-3 hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
