import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock } from 'lucide-react';

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      login(email);
      navigateTo('home'); // Kembali ke home setelah login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-champagne">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="font-clash text-4xl font-bold text-midnight-green">Welcome Back</h1>
          <p className="text-charcoal/80 mt-2">Sign in to continue to Roomora.</p>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/50" />
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address" 
              required
              className="w-full bg-rose-taupe/10 p-3 pl-12 rounded-lg border border-transparent focus:ring-2 focus:ring-bright-pink focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/50" />
            <input 
              type="password" 
              placeholder="Password" 
              defaultValue="123456"
              className="w-full bg-rose-taupe/10 p-3 pl-12 rounded-lg border border-transparent focus:ring-2 focus:ring-bright-pink focus:border-transparent"
            />
          </div>
          <button type="submit" className="w-full bg-bright-pink text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;