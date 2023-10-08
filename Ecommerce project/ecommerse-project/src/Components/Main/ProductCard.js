import React, { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartContext from "../Store/CartContext";

const ProductCard = (props) => {
const ctxProduct=useContext(CartContext)

  const addToCartHandler=(item)=>{
    ctxProduct.addItems({...item ,item})
  }   

  return (
    <Card style={{ width: "18rem" , margin:10, marginTop:20,position:"revert" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <h6> Price: {props.price}</h6>
        <Button variant="primary" onClick={()=>addToCartHandler(props.item)} >Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
