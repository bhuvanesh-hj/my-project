import React from "react";
import { Button, Table } from "react-bootstrap";

const Cart = (props) => {

  const PurchaseHandler=()=>{
    alert("Thanks for purchasing")
  }

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "white",
        padding: 10,
        width: "50%",
        textAlign:"center",
        left:"49%",
        top:60,
        marginRight:10,
        borderRadius:6
      }}
    >
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h3 style={{marginLeft:30}}>Cart</h3>
        <Button variant="danger" onClick={()=>props.hide(false)}>Close</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
      <h4>Total Amount :{0}</h4>

      <div>
        <Button onClick={PurchaseHandler}>Purchase</Button>
      </div>
    </div>
  );
};

export default Cart;
