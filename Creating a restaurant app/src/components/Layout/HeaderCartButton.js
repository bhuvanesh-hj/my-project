import classes from "./HeaderCartButton.module.css";
import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const ctx = useContext(cartContext);

  const numberOfItems = ctx.items.reduce((currentNumber, item) => {
    return currentNumber + +item.amount;
  }, 0);
  // let quantity = 0;
  // ctx.items.forEach((item) => {
  //   quantity += +item.quantity;
  // });
  return (
    <button className={classes.button} onClick={() => props.shows(true)}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
