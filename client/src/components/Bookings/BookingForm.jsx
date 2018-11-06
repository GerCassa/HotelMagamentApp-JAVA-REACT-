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


// OLD VERSION

  //   this.handleDateChange = this.handleDateChange.bind(this);
  //   this.handleLengthChange = this.handleLengthChange.bind(this);
  //   this.handleGuestsChange = this.handleGuestsChange.bind(this);
  //   this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  //   this.handleLastNameChange = this.handleLastNameChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleDateChange(event) {
  //   this.setState({ date: event.target.value })
  // }

  // handleLengthChange(event) {
  //   this.setState({ length: event.target.value })
  // }

  // handleGuestsChange(event) {
  //   this.setState({ people: event.target.value })
  // }

  // handleFirstNameChange(event) {
  //   this.setState({ firstName: event.target.value })
  // }

  // handleLastNameChange(event) {
  //   this.setState({ lastName: event.target.value })
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log('form submitted');
  //   console.log(this)
  //   const date = this.state.date;
  //   const length = this.state.length;
  //   const people = this.state.people;
  //   const firstName = this.state.firstName;
  //   const lastName = this.state.lastName;
  //   if (!date || !length || !people || !firstName || !lastName) {
  //     return;
  //   }
  //   const newBooking = { date: date, length: length, people: people, firstName: firstName, lastName: lastName };

  //   this.props.onBookingSubmit(newBooking)

  //   this.setState({ date: '', length: '', people: '', firstName: '', lastName: '' })
  // }


  // render() {