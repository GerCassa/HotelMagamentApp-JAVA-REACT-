import React from 'react';

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
      console.log(this.data);
      
  }

  render() {
    return(<h1>Hola German</h1>)
  }

}

export default BookingContainer;