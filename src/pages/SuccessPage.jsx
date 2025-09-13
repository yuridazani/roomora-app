import React from 'react';
import { properties as allProperties } from '../data/properties';
import { CheckCircle2 } from 'lucide-react';

const SuccessPage = ({ navigateTo, context }) => {
  const property = allProperties.find(p => p.id === context.propertyId);

  return (
    <div className="min-h-screen bg-champagne flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle2 className="text-bright-pink mx-auto" size={80} />
        <h1 className="font-clash text-4xl font-bold text-midnight-green mt-4">Booking Confirmed!</h1>
        <p className="text-charcoal/80 mt-2">
          Thank you, {context.fullName}! Your booking receipt has been sent to {context.email}.
        </p>

        <div className="mt-8 text-left bg-rose-taupe/10 p-6 rounded-lg">
            <h2 className="font-clash text-xl font-semibold text-midnight-green mb-4">Booking Summary</h2>
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-lg mb-4"/>
            <p className="font-bold text-lg">{property.name}</p>
            <p className="text-charcoal/70">{property.location}</p>
            <div className="border-t my-4"></div>
            <div className="space-y-2 text-charcoal">
                <div className="flex justify-between"><span>Check-in:</span><span className="font-bold">{context.checkIn}</span></div>
                <div className="flex justify-between"><span>Check-out:</span><span className="font-bold">{context.checkOut}</span></div>
                <div className="flex justify-between"><span>Guests:</span><span className="font-bold">{context.guests}</span></div>
                <div className="flex justify-between"><span>Total Nights:</span><span className="font-bold">{context.nights}</span></div>
                <div className="flex justify-between font-bold text-xl mt-2 text-midnight-green border-t pt-2"><span>Total Paid:</span><span>Rp {context.totalPrice.toLocaleString('id-ID')}</span></div>
            </div>
        </div>

        <button onClick={() => navigateTo('home')} className="bg-midnight-green text-white font-bold py-3 px-8 rounded-full mt-8 hover:bg-opacity-90 transition-all transform hover:scale-105">
            Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;