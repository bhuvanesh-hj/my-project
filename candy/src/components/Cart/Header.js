import React, { useContext } from "react";
import candyContext from "../store/CandyContext";
const Header = (props) => {
  const ctx = useContext(candyContext);
  const numberOfItems = ctx.cartItems.reduce((currentNumber, item) => {
    return currentNumber + +item.amount;
  }, 0);
  return (
    <button onClick={() => props.show(true)}>
      <span>Cart</span>
      <span>{numberOfItems}</span>
    </button>
  );
};

export default Header;
