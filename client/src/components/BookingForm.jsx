import React from 'react';

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      length: '',
      guests: '',
      firstName: '',
      lastName: ''
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Date"
          value={this.state.date} onChange={this.handleDateChange} />

        <input type="number" placeholder="How many nights"
          value={this.state.length} onChange={this.handleLengthChange} />

        <input type="number" placeholder="How many guest"
          value={this.state.guests} onChange={this.handleGuestsChange} />

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