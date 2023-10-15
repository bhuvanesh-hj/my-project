import React, { useContext, useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import ShoesContext from "../store/ShoesContext";

const AddProduct = () => {
  const ctx = useContext(ShoesContext);
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const largeInputRef = useRef();
  const mediumInputRef = useRef();
  const smallInputRef = useRef();
  const priceInputRef = useRef();

  const addProductHandler = (event) => {
    event.preventDefault();

    const productData = {
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      price: priceInputRef.current.value,
    };
    ctx.addProduct(productData);
    nameInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    priceInputRef.current.value = "";
  };

  return (
    <Form
      style={{
        marginTop: "5rem",
        backgroundColor: "bisque",
        padding: "10px",
        alignItems: "center",
      }}
      onSubmit={addProductHandler}
    >
      <Row>
        <Col>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" ref={nameInputRef} required />
        </Col>
        <Col>
          <Form.Label>Product Description</Form.Label>
          <Form.Control type="text" ref={descriptionInputRef} required />
        </Col>
        <Col>
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="number" ref={priceInputRef} required />
        </Col>
        <Col>
          <Button variant="outline-primary" type="submit" className="m-3">
            Add Product
          </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default AddProduct;
