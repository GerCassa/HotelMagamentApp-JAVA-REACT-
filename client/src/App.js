import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

import Home from './components/Home'

import RoomContainer from './containers/RoomContainer';

import BookingFormContainer from './containers/Bookings/BookingFormContainer';
import BookingListContainer from './containers/Bookings/BookingListContainer';
import BookingEditFormContainer from './containers/Bookings/BookingEditFormContainer';
import BookingContainer from './containers/Bookings/BookingContainer';

class App extends Component {
  render() {
    return (
          <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/bookings" component={BookingListContainer} />
            <Route path="/bookings/new" component={BookingFormContainer} />
            <Route exact path="/bookings/edit/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <BookingEditFormContainer id = {id} /> 
            }}/>
            <Route exact path="/bookings/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <BookingContainer id = {id} />
            }}
          />
            <Route path="/rooms" component={RoomContainer} />
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
