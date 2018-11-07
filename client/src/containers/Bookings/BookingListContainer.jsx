import React from 'react';
import Request from '../../helpers/Requests';
import BookingsList from '../../components/Bookings/BookingsList';

class BookingListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={bookings: []}    
  }

  componentDidMount(){
    const request = new Request();
    request.get('/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})        
    })    
  }


  render() {
    return(
      <BookingsList bookings={this.state.bookings} />  
    )
  }
}

export default BookingListContainer;