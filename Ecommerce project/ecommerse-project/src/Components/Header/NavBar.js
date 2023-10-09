import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CartMainContext from "../Store/CartMainContext";
import { NavLink } from "react-router-dom";

const ContainerOutsideExample = (props) => {
  const ctxNav = useContext(CartMainContext);
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{ position: "fixed", width: "100%", marginTop: -30 }}
    >
      <Container>
        <Navbar.Brand href="#home">React Mart</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white border border-primary rounded py-1 px-1"
                  : "text-secondary "
              }
              to="/home"
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white border border-primary rounded py-1 px-1"
                  : "text-secondary "
              }
              to="/products"
            >
              Store
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white border border-primary rounded py-1 px-1"
                  : "text-secondary "
              }
              to="/about"
            >
              About
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white border border-primary rounded py-1 px-1"
                  : "text-secondary "
              }
              to="/contactUs"
            >
              ContactUs
            </NavLink>
          </Nav.Link>
        </Nav>
      </Container>
      <Button
        variant="secondary"
        size="lg"
        active
        className="me-3"
        onClick={() => props.show(true)}
      >
        Cart{"   "} <span>{ctxNav.cartList.length}</span>
      </Button>
    </Navbar>
  );
};

export default ContainerOutsideExample;
