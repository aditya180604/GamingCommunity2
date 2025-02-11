import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">GamingHub</span>
          <span className="logo-icon">🎮</span>
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/forums" className="nav-link">Forums</Link>
          </li>
          <li>
            <Link to="/games" className="nav-link">Games</Link>
          </li>
          <li>
            <Link to="/news" className="nav-link">News</Link>
          </li>
          <li>
            <Link to="/events" className="nav-link">Events</Link>
          </li>
          <li>
           <Link to="/messages" className="nav-link">Messages</Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="navbar-actions">
          <Link to="/profile" className="nav-action">
            <span className="action-icon">👤</span>
            <span className="action-text">Profile</span>
          </Link>
          <Link to="/notifications" className="nav-action">
            <span className="action-icon">🔔</span>
            <span className="action-text">Notifications</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;