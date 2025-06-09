import React from 'react';
import { PhoneIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid'; // Optional: use react-icons or lucide-react instead

function BookingCard({ booking }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 max-w-md mx-auto p-6 space-y-4">
      <div className="flex items-center gap-3 text-gray-800">
        <UserIcon className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">{booking.name}</h2>
      </div>
      <div className="flex items-center gap-3 text-gray-700">
        <PhoneIcon className="h-5 w-5 text-green-500" />
        <span className="text-md">{booking.mobile}</span>
      </div>
      <div className="flex items-start gap-3 text-gray-700">
        <MapPinIcon className="h-5 w-5 text-red-500 mt-1" />
        <p className="text-sm">{booking.address}</p>
      </div>
    </div>
  );
}

export default BookingCard;
