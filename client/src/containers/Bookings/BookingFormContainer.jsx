import React from 'react';
import Request from '../../helpers/Requests';
import BookingForm from '../../components/Bookings/BookingForm';

class BookingFormContainer extends React.Component {
  constructor(props){
    super(props);
    // this.state = {rooms: [], guests: []}
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  handleBookingPost(booking){
    const request = new Request();
    request.post('/bookings', booking).then(() => {
      window.location = '/bookings';
    })
  }

  render(){
    return <BookingForm handleBookingPost={this.handleBookingPost} />
  }

}

export default BookingFormContainer;