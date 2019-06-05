import React from 'react';

const BookingDetails = (booking) => {
  console.log(booking);
  

  const onDelete = () => {
    booking.handleDelete(booking.booking.id);
  }

  const onEdit = () => {
    booking.handleEdit(booking.booking.id)
  }

  // const guests = booking.guests.map((guests, index) => {
  //   return <li key={index}>{guests.passport}</li>
  // })

  return (
    <div id="bookingDetails">
        <h3>Booking ID: {booking.booking.id}</h3>
        <p>Date: {booking.booking.date}</p>
        <p>Nights: {booking.booking.length}</p>
        <p>Guests: {booking.booking.people}</p>
      <button onClick={onDelete}>Delete Booking</button>
      <button onClick={onEdit}>Edit Booking</button>
    </div>
  )
}

export default BookingDetails;