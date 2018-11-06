import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/bookings">Bookings</Link>
    </li>
    <li>
      <Link to="/rooms">Rooms</Link>
    </li>
  </ul>
);

export default Navbar;