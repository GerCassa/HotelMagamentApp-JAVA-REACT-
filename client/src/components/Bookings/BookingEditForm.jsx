// import React from 'react';

// class BookingEditForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       date: props.booking.date,
//       length: props.booking.length,
//       people: props.booking.people,
//       firstName: props.booking.firstName,
//       lastName: props.booking.lastName
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//       event.preventDefault();
//       const booking = {
//       "date": event.target.date.value,
//       "length": event.target.length.value,
//       "people": event.target.people.value,
//       "firstName": event.target.firstName.value,
//       "lastName": event.target.lastName.value
//     }
//     this.porps.handleBookingEdit(booking)
//   }

//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.date} name="date" onChange={e => this.setState({ date: e.target.value })} />
//           <input type="number" value={this.state.length} name="length" onChange={e => this.setState({ length: e.target.value })} />
//           <input type="number" value={this.state.people} name="guests" onChange={e => this.setState({ people: e.target.value })} />
//           <input type="text" value={this.state.firstName} name="firstName" onChange={e => this.setState({ firstName: e.target.value })} />
//           <input type="text" value={this.state.lastName} name="lastName" onChange={e => this.setState({ lastName: e.target.value })} />
//           <button type="submit">Save</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default BookingEditForm;