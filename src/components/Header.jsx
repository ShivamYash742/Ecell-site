import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="contact-info">
        {/* Contact Information */}
        <span>Mon - Fri: 08:00 - 18:00 | Sunday: 08:00 - 14:00</span>
        <span>+1 (555) 123 45 67</span>
        <span>45 Queen Street, 2055 London</span>
      </div>
      <nav className="navbar">
        {/* Replace 'LOGO' text with an image if needed */}
        <div className="logo">LOGO</div>
        <ul>
          {/* Navigation Links */}
          <li>Home</li>
          <li>Features</li>
          <li>Services</li>
          <li>Prices</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
