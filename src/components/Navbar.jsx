import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const Navbar = ({ navigateTo }) => {
  const { currentUser, logout } = useAuth();

  const handleNavClick = (page) => {
    navigateTo(page);
  };

  // Fungsi untuk scroll ke section di HomePage
  const scrollToSection = (sectionId) => {
    // Jika kita tidak di home, pindah dulu ke home
    handleNavClick('home');
    // Beri sedikit waktu agar halaman home dirender sebelum scroll
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

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 font-satoshi text-champagne/80">
          <button
            onClick={() => scrollToSection('destinations')}
            className="hover:text-champagne transition-colors"
          >
            Destinations
          </button>
          <button
            onClick={() => scrollToSection('categories')}
            className="hover:text-champagne transition-colors"
          >
            Categories
          </button>
          <button
            onClick={() => scrollToSection('promo')}
            className="hover:text-champagne transition-colors"
          >
            Promo
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
