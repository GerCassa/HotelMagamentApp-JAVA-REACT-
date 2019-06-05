import React from 'react';
import Booking from './Booking';

const BookingsList = ({bookings}) => {
  const bookingNodes = bookings.map( booking => {
    return (<div key={booking.id} id="bookingItem">
            <Booking date={booking.date}
                    id={booking.id}
                    length={booking.length}
                    people={booking.people}/>
                </div>
            
    )
  })

  return(
    <div id="wrapper">
      <h2>All Bookings</h2>
        <div id="bookingTable">
          {bookingNodes}
        </div>
    </div>
  )
}

export default BookingsList;