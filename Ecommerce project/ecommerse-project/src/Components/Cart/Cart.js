import React, { useContext, useState } from "react";
import { Alert, Button, CloseButton, Table } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const Cart = (props) => {
  // const cartElements = [
  //   {
  //     title: "Colors",

  //     price: 100,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

  //     quantity: 2,
  //   },

  //   {
  //     title: "Black and white Colors",

  //     price: 50,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

  //     quantity: 3,
  //   },

  //   {
  //     title: "Yellow and Black Colors",

  //     price: 70,

  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

  //     quantity: 1,
  //   },
  // ];
  // const [CartItems, setCartItems] = useState(cartElements);

  const ctxCart = useContext(CartContext);

  const cartList =
    ctxCart.cartItems.length === 0 ? (
      <i>Please add some products!</i>
    ) : (
      ctxCart.cartItems.map((item) => {
        return (
          <tr key={item.title}>
            <td>
              {
                <img
                  src={item.imageUrl}
                  style={{
                    width: 80,
                    height: 80,
                    marginRight: 20,
                    borderRadius: 8,
                  }}
                />
              }
              {item.title}
            </td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <Button
                variant="outline-danger"
                size="sm"
                // onClick={() => rmoveItemHandler(item)}
              >
                Remove
              </Button>
            </td>
          </tr>
        );
      })
    );

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
      <h4>Total Amount :{0}</h4>

      <div>
        <Button onClick={PurchaseHandler}>Purchase</Button>
      </div>
    </div>
  );
};

export default Cart;
