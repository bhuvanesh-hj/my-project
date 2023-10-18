import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = ({show}) => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/home" className="nav_logo">
          Mail-BOX
        </NavLink>
        <ul className="nav_items">
          <li className="nav_item">
            <NavLink to="/home" className="nav_link">
              Home
            </NavLink>
            <NavLink to="" className="nav_link">
              Services
            </NavLink>
            <NavLink to="" className="nav_link">
              About
            </NavLink>
            <NavLink to="" className="nav_link">
              Contact
            </NavLink>
          </li>
        </ul>

        <NavLink to="/auth">
          <button className="button" onClick={()=>show()}>Log in</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
