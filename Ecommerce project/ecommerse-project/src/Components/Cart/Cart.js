import React, { useContext } from "react";
import { Button, CloseButton, Table } from "react-bootstrap";
import CartContext from "../Store/CartMainContext";

const Cart = (props) => {
  const ctxCart = useContext(CartContext);

  const removeItemHandler = (item) => {
    ctxCart.removeList(item);
  };

  const totalAmount = ctxCart.cartList.reduce((acc, index) => {
    return acc + index.price * index.quantity;
  }, 0);

  const cartList = ctxCart.cartList.map((item) => {
    return (
      <tr key={item.title} style={{ textAlign: "center" }}>
        <td>
          <img
            src={item.imageUrl}
            alt="Error in  render"
            style={{
              width: 80,
              height: 80,
              marginRight: 20,
              borderRadius: 8,
            }}
          />
          {item.title}
        </td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={removeItemHandler.bind(null, item)}
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  // const rmoveItemHandler = (item) => {
  //   setCartItems(CartItems.filter((product) => product.title != item.title));
  // };

  const PurchaseHandler = () => {
    alert("Thanks for Purchasing.😊");
  };

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "wheat",
        padding: 10,
        width: "50%",
        textAlign: "center",
        left: "49%",
        top: 60,
        marginRight: 10,
        borderRadius: 6,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: 30 }}>Cart</h3>
        <CloseButton onClick={() => props.hide(false)} />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{cartList}</tbody>
      </Table>
      <h4>Total Amount :{totalAmount}</h4>

      <div>
        <Button onClick={PurchaseHandler}>Purchase</Button>
      </div>
    </div>
  );
};

export default Cart;
