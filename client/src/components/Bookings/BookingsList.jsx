import React from 'react';
import Booking from './Booking';

const BookingsList = ({bookings}) => {
  const bookingNodes = bookings.map( booking => {
    return (<li key={booking.id} className="boooking-item">
              <div className="booking">
            <Booking date={booking.date}
                    id={booking.id}
                    length={booking.length}
                    people={booking.people}/>
                </div>
            </li>
    )
  })

  return(
    <div>
    <h3>All Bookings</h3>
    <ul className="bookings-list">
    {bookingNodes}
    </ul>
    </div>
  )
}

export default BookingsList;