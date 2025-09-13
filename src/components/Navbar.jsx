import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navigateTo }) => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMenuOpen(false); // tutup menu kalau mobile
  };

  const scrollToSection = (sectionId) => {
    handleNavClick('home');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="bg-midnight-green/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-clash font-semibold text-2xl text-champagne"
        >
          Roomora.
        </button>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center space-x-8 font-satoshi text-champagne/80">
          <button onClick={() => scrollToSection('destinations')} className="hover:text-champagne transition-colors">Destinations</button>
          <button onClick={() => scrollToSection('categories')} className="hover:text-champagne transition-colors">Categories</button>
          <button onClick={() => scrollToSection('promo')} className="hover:text-champagne transition-colors">Promo</button>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {currentUser ? (
            <>
              <button
                onClick={() => navigateTo('account')}
                className="bg-rose-taupe/20 text-rose-taupe font-bold py-2 px-5 rounded-full hover:bg-rose-taupe/30"
              >
                My Account
              </button>
              <button
                onClick={() => {
                  logout();
                  navigateTo('home');
                }}
                className="text-champagne/80 hover:text-champagne"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigateTo('login')}
              className="bg-bright-pink text-white font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden z-20">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-midnight-green transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-clash text-white">
          <button onClick={() => scrollToSection('destinations')}>Destinations</button>
          <button onClick={() => scrollToSection('categories')}>Categories</button>
          <button onClick={() => scrollToSection('promo')}>Promo</button>

          <div className="border-t border-champagne/20 w-1/2 pt-8 flex flex-col items-center space-y-6">
            {currentUser ? (
              <>
                <button onClick={() => handleNavClick('account')}>My Account</button>
                <button
                  onClick={() => {
                    logout();
                    handleNavClick('home');
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => handleNavClick('login')}>Sign In</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
