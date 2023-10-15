import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import ShoesContext from "../store/ShoesContext";

const NavBar = (props) => {
  const ctx = useContext(ShoesContext);
  return (
    <Container>
      <Navbar
        expand="xl"
        className="bg-body-tertiary"
        fixed="top"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
        <Button
          variant="outline-success"
          className="m-auto"
          onClick={props.cart}
        >
          Cart<span style={{ marginLeft: 10 }}>{ctx.cartList.length}</span>
        </Button>
      </Navbar>
    </Container>
  );
};

export default NavBar;
