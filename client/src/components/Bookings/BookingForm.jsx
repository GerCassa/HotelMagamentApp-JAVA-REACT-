import React from 'react';

const BookingForm = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const booking = {
      "date": event.target.date.value,
      "length": event.target.length.value,
      "people": event.target.people.value,
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value
    }
    
    props.handleBookingPost(booking);

  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Date" name="date" />

      <input type="number" placeholder="How many nights" name="length" />

      <input type="number" placeholder="How many guest" name="people" />

      <input type="text" placeholder="First Name" name="firstName" />

      <input type="text" placeholder="Last Name" name="lastName" />

      <input type="submit" value="Save Booking" />
    </form>
    )
}

export default BookingForm;