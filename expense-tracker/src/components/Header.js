import React from "react";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <NavbarBrand href="#">My Expense Tracker</NavbarBrand>
        <Nav className="mb-lg-0">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
