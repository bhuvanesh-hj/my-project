import classes from "./HeaderCartButton.module.css";
import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const [cartBtnVaild, setCartBtnVaild] = useState(false);
  const ctx = useContext(cartContext);
  const { items } = ctx;
  const numberOfItems = items.reduce((currentNumber, item) => {
    return currentNumber + +item.amount;
  }, 0);

  const btnAnimation = `${classes.button} ${cartBtnVaild ? classes.bump : " "}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartBtnVaild(true);
    const timer = setTimeout(() => {
      setCartBtnVaild(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnAnimation} onClick={() => props.shows(true)}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {numberOfItems>0 &&<span className={classes.badge}>{numberOfItems}</span>}
    </button>
  );
};

export default HeaderCartButton;
