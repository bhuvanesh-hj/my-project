import React from "react";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <NavbarBrand>
          <NavLink
            to="/home"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Expense Tracker
          </NavLink>
        </NavbarBrand>
        <Nav className="mb-lg-0">
          <NavLink
            to="/home"
            style={{ color: "white", textDecoration: "none",marginRight:"10px" }}
          >
            Home
          </NavLink>
          <NavLink to="/home" style={{ color: "white", textDecoration: "none",marginRight:"10px" }}>
            About
          </NavLink>
          <NavLink to="/login" style={{ color: "white", textDecoration: "none",marginRight:"10px" }}>
            LogIn
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
