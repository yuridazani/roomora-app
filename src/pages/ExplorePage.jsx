import React, { useState, useEffect } from 'react';
import { properties as allProperties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import FilterSidebar from '../components/FilterSidebar';

const ExplorePage = ({ navigateTo, context }) => {
  const initialFilters = context?.initialFilters || {};

  const [filters, setFilters] = useState({
    searchTerm: initialFilters.searchTerm || '',
    minPrice: initialFilters.minPrice || '',
    maxPrice: initialFilters.maxPrice || '',
    minRating: initialFilters.minRating || 0,
    category: initialFilters.category || '',
    facilities: {
      wifi: false,
      pool: false,
      parking: false,
      kitchen: false,
    },
  });

  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  // Handler untuk input teks dan harga
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Handler untuk rating
  const handleRatingChange = (rating) => {
    setFilters(prev => ({ ...prev, minRating: prev.minRating === rating ? 0 : rating }));
  };

  // Handler untuk fasilitas
  const handleFacilityChange = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      facilities: { ...prev.facilities, [name]: checked },
    }));
  };

  // Filter properties tiap kali filters berubah
  useEffect(() => {
    let result = allProperties.filter(property => {
      if (filters.searchTerm && !property.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
      if (filters.minPrice && property.price < filters.minPrice) return false;
      if (filters.maxPrice && property.price > filters.maxPrice) return false;
      if (filters.minRating && property.rating < filters.minRating) return false;
      if (filters.category && property.category !== filters.category) return false;
      for (const facility in filters.facilities) {
        if (filters.facilities[facility] && !property.facilities.includes(facility)) return false;
      }
      return true;
    });
    setFilteredProperties(result);
  }, [filters]);

  return (
    <div className="min-h-screen container mx-auto px-6 py-24 pt-32">
      <header className="text-center mb-12">
        <h1 className="font-clash text-5xl font-bold text-midnight-green">Explore Stays</h1>
        <p className="text-lg text-charcoal/80 mt-2">
          Find your next adventure from our curated list of properties.
        </p>
        <button onClick={() => navigateTo('home')} className="text-bright-pink font-bold mt-4 transition-transform hover:scale-105">
          ← Back to Home
        </button>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3 lg:w-1/4">
          <FilterSidebar
            filters={filters}
            onInputChange={handleInputChange}
            onRatingChange={handleRatingChange}
            onFacilityChange={handleFacilityChange}
          />
        </aside>

        <main className="w-full md:w-2/3 lg:w-3/4">
          <div className="mb-4 text-charcoal">
            Showing <span className="font-bold">{filteredProperties.length}</span> of <span className="font-bold">{allProperties.length}</span> properties
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProperties.map(prop => (
                <PropertyCard key={prop.id} property={prop} navigateTo={navigateTo} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/60 rounded-2xl">
              <h3 className="font-clash text-2xl text-midnight-green">No Properties Found</h3>
              <p className="text-charcoal/70 mt-2">
                Try adjusting your filters to find your perfect stay.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ExplorePage;
