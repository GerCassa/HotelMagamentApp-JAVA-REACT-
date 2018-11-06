import React from 'react';
import BookingsList from '../components/BookingsList';
import BookingForm from '../components/BookingForm';
// import Booking from '../components/Bookings';

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      currentBooking: null
    };

    this.handleBookingSubmit = this.handleBookingSubmit.bind(this)
  }

  componentDidMount() {
      fetch("/bookings")
      .then(response => response.json())
      .then(data => this.setState({bookings: data._embedded.bookings}))       
  }

  handleBookingSubmit(newBooking) {
    // newBooking.id = Date.now();
    const updatedBooking = [...this.state.bookings, newBooking];
    this.setState({ bookings: updatedBooking });
  }

      render() {
      return (
        <div>
          <h1 className="tittle">All Bookings</h1>
          <BookingForm onBookingSubmit={this.handleBookingSubmit}/>
          <BookingsList bookings={this.state.bookings} />
          {/* <Booking Booking={this.state.bookings}/> */}
        </div>)
  }
}

export default BookingContainer;