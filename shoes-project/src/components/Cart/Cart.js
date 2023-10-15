import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import ShoesContext from "../store/ShoesContext";

const Cart = (props) => {
  const ctx = useContext(ShoesContext);
  let totalAmount = ctx.cartList.reduce((crr, item) => {
    return crr + (+item.quantity * +item.price);
  }, 0);
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped="columns">
          <thead>
            <tr>
              <th>Slno</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ctx.cartList.map((item, i) => {
              let amount = (+item.quantity * +item.price)
              return (
                <tr key={Math.random().toString()}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{amount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Title
        id="contained-modal-title-vcenter"
        style={{ marginLeft: "20px" }}
      >
        Total Amount : Rs <span>{totalAmount}</span>
      </Modal.Title>
      <Modal.Footer>
        <Button onClick={()=>ctx.pruchase()}>Purchase Order</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
