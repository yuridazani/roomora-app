import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext'; // Import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider> {/* Bungkus di sini */}
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
);