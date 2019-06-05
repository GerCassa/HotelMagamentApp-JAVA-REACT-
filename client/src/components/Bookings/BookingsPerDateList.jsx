import React from 'react';
import Booking from './Booking';

const BookingsPerDateList = (props) => {
  console.log(props.bookings);
  const bookingNodes = props.bookings.map(booking => {
    return (<div key={booking.id} id="bookingItem">
        <Booking date={booking.date}
          id={booking.id}
          length={booking.length}
          people={booking.people} />
      </div>
    )
  })


  return (
    <div id="wrapper">
      <h2>Bookings Per Date</h2>
      <div id="bookingTable">
        {bookingNodes}
      </div>
    </div>
  )
}

export default BookingsPerDateList;