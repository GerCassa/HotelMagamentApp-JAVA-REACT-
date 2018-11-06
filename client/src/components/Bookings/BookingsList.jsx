import React from 'react';
import Booking from './Bookings';

const BookingsList = ({bookings}) => {
  const bookingNodes = bookings.map( booking => {
    return <Booking key={booking.id} 
                    guest={booking.guest} 
                    date={booking.date}
                    id={booking.id}
                    length={booking.length}
                    people={booking.people}
                     />
  })

  return(
    <div className="bookings-list">
    {bookingNodes}
    </div>
  )
}

export default BookingsList;