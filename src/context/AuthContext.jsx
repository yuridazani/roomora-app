import React, { createContext, useState, useContext } from 'react';

// 1. Buat Context
const AuthContext = createContext();

// 2. Buat custom hook untuk kemudahan penggunaan
export const useAuth = () => {
  return useContext(AuthContext);
};

// 3. Buat Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // null = logged out
  const [wishlist, setWishlist] = useState([]);

  // Fungsi untuk login (simulasi)
  const login = (email) => {
    // Di aplikasi nyata, ini akan memanggil API. Di sini kita buat user dummy.
    setCurrentUser({ email, name: 'Guest User' });
  };

  // Fungsi untuk logout
  const logout = () => {
    setCurrentUser(null);
    setWishlist([]); // Kosongkan wishlist saat logout
  };

  // Fungsi untuk menambah/menghapus dari wishlist
  const toggleWishlist = (propertyId) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(propertyId)) {
        return prevWishlist.filter(id => id !== propertyId); // Hapus
      } else {
        return [...prevWishlist, propertyId]; // Tambah
      }
    });
  };

  const isWishlisted = (propertyId) => {
    return wishlist.includes(propertyId);
  }

  const value = {
    currentUser,
    login,
    logout,
    toggleWishlist,
    isWishlisted,
    wishlist
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
