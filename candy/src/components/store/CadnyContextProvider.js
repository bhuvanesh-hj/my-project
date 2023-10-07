import React, { useState } from "react";
import candyContext from "./CandyContext";

const CadnyContextProvider = (props) => {
  const [candyItems, setCandyItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const addItemshandler = (item) => {
    setCandyItems([...candyItems, item]);
  };
  const addItemsToCarthandler = (item) => {

    const existItemIndex = cartItems.findIndex((meal) => meal.name === item.name);
    const existCartItem = cartItems[existItemIndex];
    if (existCartItem) {
      let updateItem = {
        ...existCartItem,
        amount: existCartItem.amount + item.amount,
      };
      const updateItems = [...cartItems];
      updateItems[existItemIndex] = updateItem;
      setCartItems([...updateItems]);
    } else {
      setCartItems([...cartItems, item]);
    }
    // setCartItems([...cartItems, item]);
  };
  const candy_Context = {
    items: candyItems,
    cartItems: cartItems,
    additems: addItemshandler,
    additemsToCart: addItemsToCarthandler,
  };
  return (
    <candyContext.Provider value={candy_Context}>
      {props.children}
    </candyContext.Provider>
  );
};

export default CadnyContextProvider;
