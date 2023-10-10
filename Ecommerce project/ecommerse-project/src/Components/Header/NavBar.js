import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import CartMainContext from "../Store/CartMainContext";
import { NavLink, useHistory } from "react-router-dom";

const ContainerOutsideExample = (props) => {
  const ctxNav = useContext(CartMainContext);
  const ctx = useContext(CartMainContext);
  const history = useHistory()

  const logOutHandler=()=>{
    ctx.logout();
    history.replace("/login")
  }

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      style={{
        position: "fixed",
        width: "100%",
        height: "70px",
        marginTop: -30,
      }}
    >
      <Container>
        <Navbar.Brand>React Mart</Navbar.Brand>
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
          {!ctx.isLoggedIn && <Nav.Link>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white border border-primary rounded py-1 px-1"
                  : "text-secondary "
              }
              to="/login"
            >
              Login
            </NavLink>
          </Nav.Link>}
          {ctx.isLoggedIn && <Button variant="dark" onClick={logOutHandler}>Log out</Button>}
        </Nav>
      </Container>
      <Button
        variant="secondary"
        size="md"
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
