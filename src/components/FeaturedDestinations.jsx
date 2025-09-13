import React from 'react';
import { MapPin } from 'lucide-react'; // Import ikon dari lucide-react

const destinations = [
  { name: "Bali", properties: "2,480", image: "https://images.unsplash.com/photo-1537996194471-e657df97525d?q=80&w=2835&auto=format=fit=crop" },
  { name: "Jogja", properties: "1,120", image: "https://images.unsplash.com/photo-1596422846543-75c611475b2d?q=80&w=2835&auto=format=fit=crop" },
  { name: "Bandung", properties: "1,850", image: "https://images.unsplash.com/photo-1622611794711-1521226a1f0a?q=80&w=2835&auto=format=fit=crop" },
  { name: "Lombok", properties: "980", image: "https://images.unsplash.com/photo-1580975253488-2d88a44256c7?q=80&w=2835&auto=format=fit=crop" },
];

const DestinationCard = ({ name, properties, image }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-96 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      <div className="absolute bottom-0 left-0 p-6">
        <div className="flex items-center space-x-2">
          <MapPin className="text-white" size={24} />
          <h3 className="font-clash text-3xl font-semibold text-white">{name}</h3>
        </div>
        <p className="text-white/80 mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          {properties} properties available
        </p>
      </div>
    </div>
  );
};

const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="bg-champagne py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-midnight-green">
            Featured Destinations
          </h2>
          <p className="text-lg text-charcoal/80 mt-2 max-w-2xl mx-auto">
            Explore our handpicked selection of top destinations, each offering a unique story and unforgettable stays.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map(dest => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
