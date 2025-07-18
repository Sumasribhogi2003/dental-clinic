import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    <h1 className="site-title">DentalCare</h1> {/* This is the large heading */}
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
