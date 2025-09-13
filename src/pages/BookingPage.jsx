import React, { useState } from 'react';
import { properties as allProperties } from '../data/properties';
import { Calendar, Users, Home, CreditCard } from 'lucide-react';

const BookingPage = ({ navigateTo, context }) => {
  const property = allProperties.find(p => p.id === context.propertyId);
  const [guestDetails, setGuestDetails] = useState({ fullName: '', email: '' });

  // Hitung jumlah malam
  const checkInDate = new Date(context.checkIn);
  const checkOutDate = new Date(context.checkOut);
  const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  const totalPrice = property.price * nights;

  const handleProceedToPayment = () => {
    if (!guestDetails.fullName || !guestDetails.email) {
      alert("Please fill in your name and email.");
      return;
    }
    // Gabungkan semua data dan teruskan ke halaman sukses (kita skip halaman pembayaran untuk simplisitas)
    navigateTo('success', {
        ...context,
        ...guestDetails,
        nights,
        totalPrice
    });
  };

  return (
    <div className="min-h-screen bg-midnight-green flex items-center justify-center p-6">
      <div className="container max-w-4xl grid md:grid-cols-2 gap-8 bg-champagne rounded-2xl shadow-2xl overflow-hidden">
        {/* Kolom Kiri: Detail Booking */}
        <div className="p-8">
          <h1 className="font-clash text-3xl font-bold text-midnight-green">Confirm Your Booking</h1>
          <p className="text-charcoal/80 mt-2">You're one step away from your dream stay.</p>

          <div className="mt-8">
            <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-lg"/>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <p className="text-sm text-charcoal/70">{property.category}</p>
                    <h2 className="font-clash text-xl font-semibold text-midnight-green">{property.name}</h2>
                </div>
                <p className="font-bold text-lg">Rp {property.price.toLocaleString('id-ID')}/night</p>
            </div>
          </div>

          <div className="mt-6 border-t border-rose-taupe/30 pt-6 space-y-4">
             <div className="flex items-center"><Calendar className="text-rose-taupe mr-3"/><span>{context.checkIn} to {context.checkOut} ({nights} nights)</span></div>
             <div className="flex items-center"><Users className="text-rose-taupe mr-3"/><span>{context.guests} Guests</span></div>
          </div>
        </div>

        {/* Kolom Kanan: Form & Pembayaran */}
        <div className="p-8 bg-white/50">
            <h2 className="font-clash text-2xl font-semibold text-midnight-green">Guest Details</h2>
            <div className="mt-4 space-y-4">
               <input type="text" placeholder="Full Name" onChange={e => setGuestDetails({...guestDetails, fullName: e.target.value})} className="w-full p-3 rounded-lg border focus:ring-bright-pink focus:border-bright-pink" />
               <input type="email" placeholder="Email Address" onChange={e => setGuestDetails({...guestDetails, email: e.target.value})} className="w-full p-3 rounded-lg border focus:ring-bright-pink focus:border-bright-pink" />
            </div>

            <h2 className="font-clash text-2xl font-semibold text-midnight-green mt-8">Payment Method</h2>
            <div className="mt-4 p-4 border rounded-lg bg-rose-taupe/10 flex items-center justify-between">
                <div className="flex items-center">
                    <CreditCard className="text-rose-taupe mr-3"/>
                    <span>Credit Card</span>
                </div>
                <span className="font-bold">**** 4242</span>
            </div>

            <div className="mt-8 border-t border-rose-taupe/30 pt-4">
                <div className="flex justify-between text-charcoal/80"><span>{nights} nights x Rp {property.price.toLocaleString('id-ID')}</span><span>Rp {totalPrice.toLocaleString('id-ID')}</span></div>
                <div className="flex justify-between text-charcoal/80"><span>Service Fee</span><span>Rp 0</span></div>
                <div className="flex justify-between font-bold text-xl mt-2 text-midnight-green"><span>Total</span><span>Rp {totalPrice.toLocaleString('id-ID')}</span></div>
            </div>

            <button onClick={handleProceedToPayment} className="w-full bg-bright-pink text-white font-bold py-3 rounded-full mt-6 hover:bg-opacity-90 transition-all transform hover:scale-105">
                Confirm & Pay
            </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;