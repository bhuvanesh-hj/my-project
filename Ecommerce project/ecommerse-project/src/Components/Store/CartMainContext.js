import React from "react";

const CartMainContext = React.createContext({
  cartList: [],
  addList: (item) => {},
  removeList: (item) => {},
});

export default CartMainContext;
