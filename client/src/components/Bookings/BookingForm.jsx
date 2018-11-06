import React from 'react';

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      length: '',
      people: '',
      firstName: '',
      lastName: ''
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleGuestsChange = this.handleGuestsChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }

  handleLengthChange(event) {
    this.setState({ length: event.target.value })
  }

  handleGuestsChange(event) {
    this.setState({ people: event.target.value })
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value })
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form submitted');
    console.log(this)
    const date = this.state.date;
    const length = this.state.length;
    const people = this.state.people;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    if (!date || !length || !people || !firstName || !lastName) {
      return;
    }
    const newBooking = { date: date, length: length, people: people, firstName: firstName, lastName: lastName };

    this.props.onBookingSubmit(newBooking)

    this.setState({ date: '', length: '', people: '', firstName: '', lastName: '' })
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Date"
          value={this.state.date} onChange={this.handleDateChange} />

        <input type="number" placeholder="How many nights"
          value={this.state.length} onChange={this.handleLengthChange} />

        <input type="number" placeholder="How many guest"
          value={this.state.people} onChange={this.handleGuestsChange} />

        <input type="text" placeholder="First Name"
          value={this.state.firstName} onChange={this.handleFirstNameChange} />

        <input type="text" placeholder="Last Name"
          value={this.state.lastName} onChange={this.handleLastNameChange} />

        <input type="submit" value="Save Booking" />
      </form>
    )
  }
}

export default BookingForm;