import React from 'react';
import BookingsList from '../components/BookingsList';
// import Booking from '../components/Bookings';

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      currentBooking: null
    };
  }

  componentDidMount() {
      fetch("/bookings")
      .then(response => response.json())
      .then(data => this.setState({bookings: data._embedded.bookings}))       
  }

      render() {
      return (
        <div>
          <h1 className="tittle">All Bookings</h1>
          <BookingsList bookings={this.state.bookings} />
          {/* <Booking Booking={this.state.bookings}/> */}
        </div>)
  }
}

export default BookingContainer;