import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-midnight-green text-champagne/80">
            <div className="container mx-auto px-6 py-12 text-center">
                <h2 className="font-clash text-3xl font-semibold text-white">Roomora.</h2>
                <p className="mt-2 max-w-md mx-auto">Find your stay, feel at home.</p>
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="#" className="hover:text-white transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-white transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-white transition-colors"><Facebook /></a>
                </div>
                <p className="mt-8 text-sm text-champagne/60">&copy; 2025 Roomora. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;