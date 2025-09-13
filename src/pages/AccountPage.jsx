import React from 'react';
import { useAuth } from '../context/AuthContext';
import { properties as allProperties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

const AccountPage = ({ navigateTo }) => {
  const { currentUser, logout, wishlist } = useAuth();
  const wishlistedProperties = allProperties.filter(p => wishlist.includes(p.id));

  const handleLogout = () => {
    logout();
    navigateTo('home');
  };

  return (
    <div className="min-h-screen container mx-auto px-6 py-24 pt-32">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="font-clash text-5xl font-bold text-midnight-green">My Account</h1>
          <p className="text-charcoal/80 mt-2">Welcome back, {currentUser.name}!</p>
        </div>
        <button onClick={handleLogout} className="bg-rose-taupe text-white font-bold py-2 px-5 rounded-full hover:bg-opacity-90">
          Logout
        </button>
      </header>

      <div>
        <h2 className="font-clash text-3xl font-semibold text-midnight-green border-b-2 border-rose-taupe/50 pb-2 mb-8">
          My Wishlist ({wishlistedProperties.length})
        </h2>
        {wishlistedProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistedProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} navigateTo={navigateTo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/60 rounded-2xl">
            <h3 className="font-clash text-2xl text-midnight-green">Your Wishlist is Empty</h3>
            <p className="text-charcoal/70 mt-2">
              Click the heart icon on any property to save it here.
            </p>
            <button onClick={() => navigateTo('explore')} className="bg-bright-pink text-white font-bold py-3 px-8 rounded-full mt-8 hover:bg-opacity-90">
              Start Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;