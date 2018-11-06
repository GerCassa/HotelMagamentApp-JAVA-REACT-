import React from 'react';
import BookingsList from '../../components/Bookings/BookingsList';
import BookingForm from '../../components/Bookings/BookingForm';
import Request from '../../helpers/Requests';
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
    let request = new Request()
    request.get('/bookings').then((response) => {
    this.setState({bookings: response._embedded.bookings})
  })
}

  handleBookingSubmit(newBooking) {
    // newBooking.id = Date.now();
    const updatedBooking = [...this.state.bookings, newBooking];
    this.setState({ bookings: updatedBooking });
    let request = new Request()
    request.post('/bookings', updatedBooking).then(() => {
      window.location = '/bookings'
    })
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