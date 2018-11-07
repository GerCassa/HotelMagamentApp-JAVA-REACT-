import React from 'react';
import Request from '../../helpers/Requests';
import BookingDetails from '../../components/Bookings/BookingDetails';

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {booking: null}
  }

  componentDidMount() {
    let request = new Request()
    request.get('/bookings/'+ this.props.id).then((response) => {
    this.setState({booking: response})
    // console.log(response);
    })
  }

  handleDelete(id) {
    const request = new Request();
    request.delete('/bookings/' + id).then(() => {
      window.location = '/bookings'
    })
  }

  handleEdit(id) {
    window.location = '/bookings/edit/' + id
  }


  render() {   

    if(!this.state.booking) {
      return null;
    }
    // console.log(this.state.booking);

    return(
      <div className="booking">

      <BookingDetails booking={this.state.booking} guests={this.state.booking.guests} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    )
  }
}

export default BookingContainer;