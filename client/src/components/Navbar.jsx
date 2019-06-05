import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div id="menu-outer">
    <div className="table">
      <ul id="horizontal-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/bookings/new">New Booking</Link>
        </li>
        <li>
          <Link to="/bookings/perDate">Search Bookings</Link>
        </li>

        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;