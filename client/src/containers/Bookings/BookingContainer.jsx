import React from 'react';
import BookingsList from '../../components/Bookings/BookingsList';
// import BookingForm from '../../components/Bookings/BookingForm';
import Request from '../../helpers/Requests';
import BookingEditForm from '../../components/Bookings/BookingEditForm';
import Booking from '../../components/Bookings/Booking';

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

  handleDelete(id) {
    const request = new Request();
    const url = '/bookings/' + id;
    request.delete(url).then(() => {
      window.location = '/bookings'
    })
  }

  handleEdit(id) {
    window.location = '/bookings/edit/' + id
  }


  render() {
  return (
    <div>
      <h1 className="tittle">All Bookings</h1>
      <Booking onDelete={this.handleDelete} onEdit={this.handleEdit} />
      <BookingsList bookings={this.state.bookings} />
      <BookingEditForm Booking={this.state.bookings}/>
    </div>
    )
  }
}

export default BookingContainer;