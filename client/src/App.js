import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import BookingContainer from './containers/BookingContainer';
import RoomContainer from './containers/RoomContainer';

class App extends Component {
  render() {
    return (
          <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/bookings" component={BookingContainer} />
            <Route path="/rooms" component={RoomContainer} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
