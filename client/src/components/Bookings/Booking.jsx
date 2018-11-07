import React from 'react';
import { Link } from 'react-router-dom';

const Booking = (booking) => {

  if(!booking){return null;}

  return (
    <React.Fragment>
      <Link to={"/bookings/" + booking.id} className="name">
        Booking: {booking.id}
      </Link>
      <p>Date: {booking.date}</p>
      <p>Nights: {booking.length}</p>
      <p>Guests: {booking.people}</p>

    </React.Fragment>
  )
}

export default Booking;