import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="nav_logo">
          Mail-BOX
        </a>
        <ul className="nav_items">
          <li className="nav_item">
            <a href="#" className="nav_link">
              Home
            </a>
            <a href="#" className="nav_link">
              Services
            </a>
            <a href="#" className="nav_link">
              About
            </a>
            <a href="#" className="nav_link">
              Contact
            </a>
          </li>
        </ul>
        <button className="button">Log in</button>
      </nav>
    </header>
  );
};

export default Header;
