import React from 'react';
import { PhoneIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid';

function BookingCard({ booking }) {
  return (
    <div
      className="
        card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300
        w-full max-w-sm mx-auto p-5 sm:p-6
        rounded-xl
      "
    >
      <div className="flex items-center gap-3 text-base-content">
        <UserIcon className="h-6 w-6 text-primary" />
        <h2 className="text-lg sm:text-xl font-semibold">{booking.name}</h2>
      </div>

      <div className="flex items-center gap-3 text-base-content mt-3">
        <PhoneIcon className="h-5 w-5 text-success" />
        <span className="text-sm sm:text-base">{booking.mobile}</span>
      </div>

      <div className="flex items-start gap-3 text-base-content mt-3">
        <MapPinIcon className="h-5 w-5 text-error mt-1" />
        <p className="text-sm sm:text-base leading-relaxed">{booking.address}</p>
      </div>
    </div>
  );
}

export default BookingCard;
