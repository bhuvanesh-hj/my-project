import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ShoesContext from "../store/ShoesContext";
import Table from "react-bootstrap/Table";
import Quantity from "./Quantity";

const ProductList = () => {
  // const quantityInputRef = useRef();
  const ctx = useContext(ShoesContext);
  let quantity = 0
  const quantityValue=(value)=>{
    // console.log(value)
      quantity=value

  }

  const addCartHandler = (item) => {
    // const quantity = quantityInputRef.current.value;
    ctx.addCart({ ...item, quantity: quantity });
  };

  return (
    <div
      style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
    >
      <Table striped='columns'  >
        <thead>
          <tr>
            <th>Slno</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {ctx.productList.map((item, i) => {
            return (
              <tr key={Math.random().toString()}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Quantity value={quantityValue}/>
                </td>
                <td>{item.price}</td>
                <td>
                  <Button
                    onClick={() =>
                      addCartHandler({ name: item.name, price: item.price })
                    }
                  >
                    Add to cart
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
