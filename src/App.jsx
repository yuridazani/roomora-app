import React, { useState } from 'react';
import { useAuth } from './context/AuthContext'; // Import useAuth

// Import halaman
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import DetailPage from './pages/DetailPage';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';

// Import komponen
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [route, setRoute] = useState({ page: 'home', context: {} });
  const { currentUser } = useAuth(); // Dapatkan user

  const navigateTo = (page, context = {}) => {
    setRoute({ page, context });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (route.page) {
      case 'explore':
        return <ExplorePage navigateTo={navigateTo} />;
      case 'detail':
        return <DetailPage navigateTo={navigateTo} context={route.context} />;
      case 'booking':
        return <BookingPage navigateTo={navigateTo} context={route.context} />;
      case 'success':
        return <SuccessPage navigateTo={navigateTo} context={route.context} />;
      case 'login':
        return <LoginPage navigateTo={navigateTo} />;
      case 'account':
        // Rute terproteksi: jika tidak login, arahkan ke login
        return currentUser ? (
          <AccountPage navigateTo={navigateTo} />
        ) : (
          <LoginPage navigateTo={navigateTo} />
        );
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  const showFooter = !['booking', 'success', 'login'].includes(route.page);

  return (
    <div className="bg-champagne font-satoshi text-charcoal">
      <Navbar navigateTo={navigateTo} />
      {renderPage()}
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
