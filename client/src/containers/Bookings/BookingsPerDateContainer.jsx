import React from 'react';
import Request from '../../helpers/Requests';
import BookingsPerDateList from '../../components/Bookings/BookingsPerDateList';

class BookingsPerDateContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { bookings: [] }
  }

  componentDidMount() {
    const request = new Request();
    request.get('/bookings')
    .then((data) => {
      this.setState({ bookings: data._embedded.bookings })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.date.value);
    const request = new Request();
    request.get('/bookings/perDate/' + event.target.date.value)
    // .then((data) => {
    //   this.setState({bookings: data})
    //   console.log(data);      
    // })
    
  }

  render(){
    console.log(this.state.bookings);
    
    return(      
      <div>
      <form onSubmit={this.handleSubmit}>
        <label for="date-search">Date to Search: </label>
        <input id="date-search" type="text" placeholder="Booking Date" name="date" />
        <input type="submit" value="Search Bookings" id="searchButton" />
      </form>
      <BookingsPerDateList bookings={this.state.bookings} />
      </div>
    )
  }

}

export default BookingsPerDateContainer;