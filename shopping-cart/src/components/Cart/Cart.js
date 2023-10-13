import React, { useEffect, useState } from "react";
import { CartState } from "../../context/Context";
import {
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
  FormControl,
} from "react-bootstrap";
import "../Home/home.css";
import Rating from "../Home/Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(
    () =>
      setTotal(
        cart.reduce((acc, curr) => acc + +curr.price * curr.quantity, 0)
      ),
    [cart]
  );
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroupItem key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>{prod.name}</Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={prod.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        data: { id: prod.id, quantity: e.target.value },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((c) => (
                      <option key={c + 1}>{c + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Col md={2}>
                  <Button
                    variant="outline-danger"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", data: prod })
                    }
                  >
                    <AiFillDelete />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          Total: ₹ {total}
        </span>
        <Button type="button" variant="light" disabled={cart.length === 0}>
          Procced to CheckOut
        </Button>
      </div>
    </div>
  );
};

export default Cart;
