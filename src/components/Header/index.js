import React from 'react';
import './index.css'; // Ensure this path is correct
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Spartificial Dashboard</div>
      <div className="header-div">
      <nav className="header-nav">
        <a href="#profile" className="header-link">Profile</a>
        <a href="#settings" className="header-link">Settings</a>
        <a href="#logout" className="header-link">Logout</a>
      </nav>
      <div className="header-icons">
        <FaSearch className="header-icon" />
        <FaUserCircle className="header-icon" />
      </div>
      </div>
    </header>
  );
};

export default Header;
