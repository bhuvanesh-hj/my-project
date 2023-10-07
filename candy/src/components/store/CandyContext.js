import React from "react";

const candyContext = React.createContext({
  items: [],
  cartItems:[],
  additems: (item) => {},
  additemsToCart:(item)=>{}
});

export default candyContext;
