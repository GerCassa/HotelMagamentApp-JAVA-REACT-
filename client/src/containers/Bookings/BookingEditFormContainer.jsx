import React from 'react';
import BookingEditForm from '../../components/Bookings/BookingEditForm';

class BookingEditFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {rooms: null, guests: null, bookings: null}
    this.handleBookingEdit = this.handleBookingEdit.bind(this)
  }

  handleBookingEdit(booking) {
    const request = new Request();
    request.patch('/bookings/' + this.props.id, booking).then(() => {
      window.location = '/bookings/' + this.props.id
    })
  }

  render() {
    // if(!this.state.bookings || !this.state.guests || !this.state.rooms) {
    //   return null;
    // }
    return <BookingEditForm handleBookingEdit = {this.handleBookingEdit}/>
  }
}

export default BookingEditFormContainer;