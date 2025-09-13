import React from 'react';
import { Star, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useModal } from '../context/ModalContext'; // Import useModal

const PropertyCard = ({ property, navigateTo }) => {
  const { currentUser, toggleWishlist, isWishlisted } = useAuth();
  const { showModal } = useModal();

  const handleCardClick = () => {
    if (navigateTo) {
      navigateTo('detail', { propertyId: property.id });
    }
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation(); // cegah klik kartu
    if (!currentUser) {
      // Ganti alert dengan modal
      showModal(
        'Authentication Required',
        'Please sign in to add properties to your wishlist.'
      );
      navigateTo('login');
      return;
    }
    toggleWishlist(property.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white/50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-56 object-cover"
        />
        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full cursor-pointer transition-all hover:scale-110 ${
            isWishlisted(property.id) ? 'text-bright-pink' : 'text-charcoal'
          }`}
        >
          <Heart
            size={20}
            className={isWishlisted(property.id) ? 'fill-current' : ''}
          />
        </button>

        {/* Rating badge */}
        <div className="absolute top-3 left-3 bg-midnight-green text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
          <Star size={14} className="mr-1 fill-current" /> {property.rating}
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-charcoal/70">
          {property.category} • {property.location}
        </p>
        <h3 className="font-clash text-xl font-semibold text-midnight-green mt-1 truncate">
          {property.name}
        </h3>
        <p className="mt-2 text-lg font-satoshi font-bold text-charcoal">
          Rp {property.price.toLocaleString('id-ID')}
          <span className="font-normal text-sm text-charcoal/70"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
