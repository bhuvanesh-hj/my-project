import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import cartContext from "../../store/cartContext";
const Cart = (props) => {
  //Importing the cartContex using the cart
  const cartctx = useContext(cartContext);

  const hasItems = cartctx.items.length >= 1;

  const addItemHandler = (item) => {
    cartctx.addItems({ ...item, amount: 1 });
  };

  const remveItemHandler = (id) => {
    cartctx.removeItems(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemHandler}
          onRemove={remveItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal hide={props.hide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs {cartctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => props.hide(false)}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
