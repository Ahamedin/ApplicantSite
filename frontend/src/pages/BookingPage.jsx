import React, { useEffect } from 'react'
import { useBlockStore } from '../store/useBlockStore'
import BookingCard from '../components/BookingCard'

function BookingPage() {

  const { fetchBooking, loading, error, booking } = useBlockStore()

  useEffect(() => {
    fetchBooking()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="alert alert-error text-sm sm:text-base">{error}</div>
      </div>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {booking.length > 0 ? (
        <div className="grid
             grid-cols-1
             sm:grid-cols-2
             lg:grid-cols-2
             xl:grid-cols-3
             gap-6
             place-items-center
        ">
          {booking.map((item) => (
            <BookingCard key={item.id} booking={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 font-serif text-lg py-20">
          No bookings found 😔
        </div>
      )}

    </main>
  )
}

export default BookingPage
