import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { CartState } from "../../context/Context";
import { AiFillDelete } from "react-icons/ai";
import "../Home/home.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div>
      <Navbar bg="info" variant="dark" style={{ height: 80 }}>
        <Container>
          <NavbarBrand>
            <NavLink to="/">Shopping Cart</NavLink>
          </NavbarBrand>
          <Navbar.Text className="search">
            <FormControl
              type="search"
              style={{ width: 500 }}
              placeholder="Search"
              onChange={(e) =>
                productDispatch({ type: "FILTER_SEARCH", data: e.target.value })
              }
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown style={{ marginRight: "60px" }}>
              <Dropdown.Toggle bg="secondary">
                <FiShoppingCart color="white" fontSize="25px" />
                {/* <span style={{padding: 5}}>{8}</span> */}
                <Badge bg="dark" style={{ marginLeft: "10px" }}>
                  {cart.length}
                </Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 280 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartItem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImage"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>₹{prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="25px"
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              data: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 7.5px" }}>
                        Go to Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
