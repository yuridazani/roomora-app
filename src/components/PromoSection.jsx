import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PromoSection = () => {
  return (
    <section id="promo" className="bg-champagne py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Kolom Kiri: Teks & CTA */}
        <div className="text-left">
          <p className="font-recoleta text-rose-taupe text-lg">Special Promo</p>
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-midnight-green mt-2 leading-tight">
            Get 30% Off Your Private Villa Escape
          </h2>
          <p className="font-satoshi text-charcoal/80 mt-4 max-w-lg">
            Book a secluded villa for a minimum of three nights and enjoy a massive discount. Perfect for a quiet getaway or a romantic holiday.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center font-satoshi text-charcoal">
              <CheckCircle2 className="text-bright-pink mr-3" size={20} />
              Private Pool Included
            </li>
            <li className="flex items-center font-satoshi text-charcoal">
              <CheckCircle2 className="text-bright-pink mr-3" size={20} />
              Complimentary Breakfast
            </li>
            <li className="flex items-center font-satoshi text-charcoal">
              <CheckCircle2 className="text-bright-pink mr-3" size={20} />
              Free Airport Transfer
            </li>
          </ul>

          <button className="bg-bright-pink text-white font-bold py-3 px-8 rounded-full mt-8 
                             hover:bg-opacity-90 transition-all transform hover:scale-105">
            Claim Offer
          </button>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="relative h-full">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden transform md:rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-105 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1613977257363-31b5c27f3b6d?q=80&w=2787&auto=format&fit=crop" 
              alt="Luxury villa promo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
