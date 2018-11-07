import React from 'react';
import Request from '../../helpers/Requests';
import BookingForm from '../../components/Bookings/BookingForm';

class BookingFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {rooms: [], guests: []}
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  componentDidMount() {
    const request = new Request()
    request.get("/rooms").then((data) => {
      this.setState({rooms: data._embedded.rooms})
    }).then(() => {
      request.get("/guests").then((data) => {
        this.setState({guests: data._embedded.guests})
      });
    });
  }

  handleBookingPost(booking, guestId){
    const request = new Request();
    request.post('/bookings', booking).then(() => {
      window.location = '/bookings';
    })
  }

  render(){
    return <BookingForm guests={this.state.guests} rooms={this.state.rooms} handleBookingPost={this.handleBookingPost} />
  }

}

export default BookingFormContainer;