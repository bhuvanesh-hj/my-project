import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "react-bootstrap";
import Rating from "./Rating";
import "./home.css";
import { CartState } from "../../context/Context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();



  return (
    <div className="products">
      <Card>
        <CardImg src={product.image} variant="top" alt={product.name} />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>
            <span>₹ {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days to delivery</div>
            )}
            <Rating rating={product.ratings} onClick={() => {}} />
          </CardSubtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={()=>dispatch({ type: "REMOVE_FROM_CART", data: product })}
            >
              Remove from the cart
            </Button>
          ) : (
            <Button
              disabled={!product.inStock}
              onClick={()=>dispatch({ type: "ADD_TO_CART", data: product })}
            >
              {product.inStock ? "Add to cart" : "Out of Stock"}
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleProduct;
