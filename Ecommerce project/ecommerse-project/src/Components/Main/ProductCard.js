import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartMainContext from "../Store/CartMainContext";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const ctx = useContext(CartMainContext);

  const addToCartHandler = (item) => {
    ctx.addList({ ...item, quantity: 1 });
  };

  return (
    <Card
      style={{ width: "18rem", margin: 10, marginTop: 20, position: "revert" }}
    >
       <Link to={"/products/" + props.title}>
      <Card.Img variant="top" src={props.image} /></Link>
      <Card.Body>
        <Link to={"/products/" + props.title}>
          <Card.Title>{props.title}</Card.Title>
        </Link>
        <h6> Price: {props.price}</h6>
        <Button
          variant="primary"
          onClick={addToCartHandler.bind(null, props.item)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
