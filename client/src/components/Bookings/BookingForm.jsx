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
    <div>
      
    <form onSubmit={handleSubmit}>
      <label>Date</label>
     <input type="text" placeholder="Date in DD-MM-YYYY" name="date" className="datepicker" />    
      <label>Duration</label>
      <input type="number" placeholder="How many nights" name="length" min= "0" />
      <label>Guests</label>
      <input type="number" placeholder="How many guest" name="people" min= "0" />
      <label>First Name</label>
      <input type="text" placeholder="First Name" name="guest" />
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" name="guest" />

      {/* <select name="guest" placeholder="Guest Last Name">
      {guestsOptions}
      </select> SAVING THIS FOR WHEN I CREATE THE NEW GUEST FORM */}

      <input type="submit" value="Save Booking" id="submitButton" />
    </form>
    </div>
      )
  }
  
export default BookingForm;