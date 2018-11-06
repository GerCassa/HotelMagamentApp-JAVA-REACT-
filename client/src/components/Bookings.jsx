import React from 'react';

const Booking = (booking) => {
  return (
    <div>
    <h5>Booking ID: {booking.id}</h5>
    <h5>Booking Date: {booking.date}</h5>
    <h5>Amount of Nights: {booking.length}</h5>
    <h5>Guests: {booking.people}</h5>
    </div>
  )
}

export default Booking;