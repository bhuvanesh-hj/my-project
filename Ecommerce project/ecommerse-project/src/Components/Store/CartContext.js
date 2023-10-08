import React from "react";


const CartContext = React.createContext({
  cartItems: [],
  addItems: () => {},
  removeItems: (item) => {},
});

export default CartContext;
