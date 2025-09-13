import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-midnight-green text-champagne/80 border-t-4 border-rose-taupe">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Kolom 1: Brand */}
                    <div>
                        <h2 className="font-clash text-3xl font-semibold text-white">Roomora.</h2>
                        <p className="mt-2 max-w-md">Find your stay, feel at home.</p>
                    </div>

                    {/* Kolom 2: Quick Links */}
                    <div>
                        <h3 className="font-clash text-xl font-medium text-white">Explore</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Social */}
                    <div>
                        <h3 className="font-clash text-xl font-medium text-white">Connect</h3>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="p-2 bg-rose-taupe/20 rounded-full hover:bg-bright-pink hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-rose-taupe/20 rounded-full hover:bg-bright-pink hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-rose-taupe/20 rounded-full hover:bg-bright-pink hover:text-white transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-champagne/20 mt-12 pt-8 text-center">
                  <p className="text-sm text-champagne/60">&copy; 2025 Roomora. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;