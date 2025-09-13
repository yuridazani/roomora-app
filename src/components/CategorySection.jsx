import React from 'react';
import { Home, Building, Palmtree, BedDouble } from 'lucide-react';

const categories = [
  { name: "Villa", icon: <Home size={40} /> },
  { name: "Hotel", icon: <Building size={40} /> },
  { name: "Resort", icon: <Palmtree size={40} /> },
  { name: "Guesthouse", icon: <BedDouble size={40} /> },
];

const CategoryCard = ({ name, icon }) => (
  <div className="group bg-rose-taupe/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer
                  transition-all duration-300 ease-in-out hover:bg-rose-taupe hover:scale-105 transform">
    <div className="text-rose-taupe transition-colors duration-300 group-hover:text-white">
      {icon}
    </div>
    <h3 className="font-clash text-xl font-medium text-charcoal mt-4 transition-colors duration-300 group-hover:text-white">
      {name}
    </h3>
  </div>
);

const CategorySection = () => {
  return (
    <section id="categories" className="bg-champagne py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-midnight-green">
            Browse by Category
          </h2>
          <p className="text-lg text-charcoal/80 mt-2 max-w-2xl mx-auto">
            Find the perfect type of stay that matches your vibe and your needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {categories.map(category => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
