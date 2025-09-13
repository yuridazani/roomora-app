import React from 'react';
import { Search, Star, Wifi, Droplets, ParkingSquare, UtensilsCrossed } from 'lucide-react';

const ratingOptions = [4, 3, 2];
const facilityOptions = [
    { name: 'wifi', label: 'Wi-Fi', icon: <Wifi size={20}/> },
    { name: 'pool', label: 'Pool', icon: <Droplets size={20}/> },
    { name: 'parking', label: 'Parking', icon: <ParkingSquare size={20}/> },
    { name: 'kitchen', label: 'Kitchen', icon: <UtensilsCrossed size={20}/> },
];

const FilterSidebar = ({ filters, onInputChange, onRatingChange, onFacilityChange }) => {
    return (
        <div className="bg-white/60 p-6 rounded-2xl shadow-sm sticky top-24">
            <h3 className="font-clash text-2xl font-semibold text-midnight-green mb-6">Filters</h3>

            {/* Search by Name */}
            <div className="relative mb-6">
                <input type="text" name="searchTerm" value={filters.searchTerm} onChange={onInputChange} placeholder="Search property..." className="w-full bg-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-bright-pink" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/50" size={20} />
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <label className="font-bold text-charcoal mb-2 block">Price Range (IDR)</label>
                <div className="flex space-x-2">
                    <input type="number" name="minPrice" value={filters.minPrice} onChange={onInputChange} placeholder="Min" className="w-1/2 bg-white rounded-full p-2 text-center focus:outline-none focus:ring-2 focus:ring-bright-pink" />
                    <input type="number" name="maxPrice" value={filters.maxPrice} onChange={onInputChange} placeholder="Max" className="w-1/2 bg-white rounded-full p-2 text-center focus:outline-none focus:ring-2 focus:ring-bright-pink" />
                </div>
            </div>

            {/* Rating */}
            <div className="mb-6">
                <label className="font-bold text-charcoal mb-2 block">Rating</label>
                <div className="flex space-x-2">
                    {ratingOptions.map(rating => (
                        <button key={rating} onClick={() => onRatingChange(rating)} className={`flex items-center justify-center p-2 rounded-full border-2 transition-colors ${filters.minRating === rating ? 'bg-rose-taupe text-white border-rose-taupe' : 'bg-transparent border-gray-300 text-charcoal'}`}>
                            {rating} <Star size={14} className="ml-1" /> +
                        </button>
                    ))}
                </div>
            </div>

            {/* Facilities */}
            <div>
                <label className="font-bold text-charcoal mb-2 block">Facilities</label>
                <div className="space-y-2">
                    {facilityOptions.map(facility => (
                        <label key={facility.name} className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" name={facility.name} checked={filters.facilities[facility.name]} onChange={onFacilityChange} className="h-5 w-5 rounded border-gray-300 text-bright-pink focus:ring-bright-pink"/>
                            {facility.icon}
                            <span>{facility.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;