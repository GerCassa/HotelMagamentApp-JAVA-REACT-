import React from 'react';

const BookingForm = (props) => {  

  function handleSubmit(event) {
    // console.log(event.target.rooms.option);
    event.preventDefault();
    const booking = {
        "date": event.target.date.value,
        "length": event.target.length.value,
        "people": event.target.people.value,
        "guest": event.target.guest.value,
    }
    props.handleBookingPost(booking);
  }

  // const guestsOptions = props.guests.map((guest, index) => {
  //   return <option key={index} value={guest._links.self.href}>{guest.lastName}</option>
  // }) 

  //I will use the code above when I build the create guest form.

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Date" name="date" />

      <input type="number" placeholder="How many nights" name="length" />

      <input type="number" placeholder="How many guest" name="people" />

      <input type="text" placeholder="First Name" name="guest" />

      <input type="text" placeholder="Last Name" name="guest" />

      {/* <select name="guest" placeholder="Guest Last Name">
      {guestsOptions}
      </select> SAVING THIS FOR WHEN I CREATE THE NEW GUEST FORM */}

      <input type="submit" value="Save Booking" />
    </form>
    )
}

export default BookingForm;