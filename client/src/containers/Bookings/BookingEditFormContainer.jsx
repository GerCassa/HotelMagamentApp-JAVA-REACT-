// import React from 'react';
// import Request from '../../helpers/Requests';
// import BookingEditForm from '../../components/Bookings/BookingEditForm';

// class BookingEditFormContainer extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {rooms: null, guests: null, bookings: null}
//     this.handleBookingEdit = this.handleBookingEdit.bind(this)
//   }

//   componentDidMount() {
//     const request = new Request();
//     request.get("/rooms").then((rooms) => {
//       this.setState({ rooms: rooms._embedded.rooms })
//     });
//     request.get("/bookings/" + this.props.id).then((booking) => {
//       this.setState({ booking: booking })
//     });
//     request.get("/guests").then((guests) => {
//       this.setState({ guests: guests._embedded.guests })
//     });
//   }

//   handleBookingEdit(booking) {
//     const request = new Request();
//     request.patch('/bookings/' + this.props.id, booking).then(() => {
//       window.location = '/bookings/' + this.props.id
//     })
//   }

//   render() {
//     if(!this.state.bookings || !this.state.guests || !this.state.rooms) {
//       return null;
//     }
//     return <BookingEditForm rooms={this.state.rooms} 
//                             guests={this.state.guests} 
//                             bookings={this.state.bookings}
//                             handleBookingEdit = {this.handleBookingEdit}
//             />
//   }
// }

// export default BookingEditFormContainer;