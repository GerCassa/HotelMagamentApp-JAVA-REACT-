import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import BookingsList from './components/BookingsList';
import BookingContainer from './containers/BookingContainer';

class App extends Component {
  render() {
    return (
          <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/bookings" component={BookingContainer} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
