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
  }

  componentDidMount() {
    let request = new Request()
    request.get('/bookings').then((response) => {
    this.setState({bookings: response._embedded.bookings})
  })
}

  //TODO: turn this into a single booking container.
  //TODO: create list of all bookings.

      render() {
      return (
        <div>
          <h1 className="tittle">All Bookings</h1>
          <BookingForm />
          <BookingsList bookings={this.state.bookings} />
          {/* <Booking Booking={this.state.bookings}/> */}
        </div>)
  }
}

export default BookingContainer;