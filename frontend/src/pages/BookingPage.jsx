import React from 'react'
import { useEffect } from 'react'
import { useBlockStore } from '../store/useBlockStore'
import BookingCard from '../components/BookingCard'

function BookingPage() {

    const {fetchBooking, loading, error, booking} = useBlockStore()

    useEffect(()=>{
        fetchBooking();
    },[])

    console.log(booking);



  if(loading){
    return(
      <div className='flex justify-center items-center min-h-screen'>
          <div className='loading loading-spinner loading-lg' />
      </div>
    );
  }

  if(error){
    return(
      <div className='container mx-auto px-4 py-8'>
        <div className='alert alert-error'>{error}</div>
      </div>
    )
  }
  return (
    <div className='space-y-6'>
      {booking.map(booking => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  )
}

export default BookingPage
