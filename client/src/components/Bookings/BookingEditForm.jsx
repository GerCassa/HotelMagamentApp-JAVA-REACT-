import React from 'react';

class BookingEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: props.booking.date,
      length: props.booking.length,
      people: props.booking.people
      //TODO: once i have the create new guest form, modify this bit to take a guest more than ust names.
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();      
      const booking = {
      "date": event.target.date.value,
      "length": event.target.length.value
      // "people": event.target.people.value
      //TODO: same here, modify names for guest.
    }
    this.props.handleBookingEdit(booking)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Date</label>
          <input type="text" value={this.state.date} name="date" onChange={e => this.setState({ date: e.target.value })} />
          <label>Dration of Stay</label>
          <input type="number" value={this.state.length} name="length" onChange={e => this.setState({ length: e.target.value })} />
          {/*TODO: and same here, add a select dropdown for guests*/}
          <input type="submit" value="Save Booking" id="submitButton" />
        </form>
      </div>
    )
  }
}

export default BookingEditForm;