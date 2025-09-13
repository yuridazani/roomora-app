import React, { useState } from 'react';
import { properties as allProperties } from '../data/properties';
import { Star, MapPin, Wifi, Droplets, ParkingSquare, UtensilsCrossed } from 'lucide-react';

// Helper untuk menampilkan ikon fasilitas
const facilityIcons = {
  wifi: <Wifi size={20} />,
  pool: <Droplets size={20} />,
  parking: <ParkingSquare size={20} />,
  kitchen: <UtensilsCrossed size={20} />,
};

const DetailPage = ({ navigateTo, context }) => {
  // Cari properti berdasarkan ID dari context
  const property = allProperties.find(p => p.id === context.propertyId);

  // State untuk form booking
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  if (!property) {
    return (
      <div className="text-center py-40">
        <h1 className="font-clash text-3xl">Property Not Found</h1>
        <button
          onClick={() => navigateTo('explore')}
          className="text-bright-pink font-bold mt-4"
        >
          ← Back to Explore
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBookNow = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select check-in and check-out dates.');
      return;
    }
    navigateTo('booking', {
      propertyId: property.id,
      ...bookingData,
    });
  };

  return (
    <div className="container mx-auto px-6 py-24 pt-32">
      {/* Header & Tombol Kembali */}
      <div className="mb-8">
        <button
          onClick={() => navigateTo('explore')}
          className="text-bright-pink font-bold transition-transform hover:scale-105"
        >
          ← Back to Explore
        </button>
        <h1 className="font-clash text-4xl md:text-5xl font-bold text-midnight-green mt-4">
          {property.name}
        </h1>
        <div className="flex items-center text-charcoal/80 mt-2">
          <Star className="text-bright-pink fill-current" size={20} />{' '}
          <span className="ml-1 font-bold">{property.rating}</span>
          <span className="mx-2">•</span>
          <MapPin size={20} /> <span className="ml-1">{property.location}</span>
        </div>
      </div>

      {/* Galeri Gambar */}
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-12">
        <div className="col-span-4 md:col-span-2 row-span-2 rounded-2xl overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden">
          <img
            src={property.images[1]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden">
          <img
            src={property.images[2]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block col-span-1 rounded-2xl overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block col-span-1 rounded-2xl overflow-hidden">
          <img
            src={property.images[1]}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Konten Utama: Deskripsi & Booking Box */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Kolom Kiri: Info */}
        <div className="w-full md:w-2/3">
          <h2 className="font-clash text-3xl font-semibold text-midnight-green border-b-2 border-rose-taupe/50 pb-2">
            About this place
          </h2>
          <p className="mt-4 text-charcoal/90 leading-relaxed">
            {property.description}
          </p>

          <h3 className="font-clash text-2xl font-semibold text-midnight-green mt-8 pb-2">
            Facilities
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {property.facilities.map((fac) => (
              <div
                key={fac}
                className="flex items-center bg-white/60 p-3 rounded-lg"
              >
                {facilityIcons[fac]} <span className="ml-3 capitalize">{fac}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Booking Box */}
        <div className="w-full md:w-1/3">
          <div className="bg-white/80 p-6 rounded-2xl shadow-lg sticky top-24">
            <p className="text-2xl font-bold text-charcoal">
              Rp {property.price.toLocaleString('id-ID')}
              <span className="font-normal text-base text-charcoal/70">
                {' '}
                / night
              </span>
            </p>
            <div className="mt-4 border-t pt-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <label className="font-bold">CHECK-IN</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-1 rounded border-gray-300"
                  />
                </div>
                <div>
                  <label className="font-bold">CHECK-OUT</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-1 rounded border-gray-300"
                  />
                </div>
                <div className="col-span-2">
                  <label className="font-bold">GUESTS</label>
                  <input
                    type="number"
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-1 rounded border-gray-300"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleBookNow}
              className="w-full bg-bright-pink text-white font-bold py-3 rounded-full mt-4 hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
