import React from "react";

const ShoesContext = React.createContext({
  productList: [],
  cartList: [],
  addProduct: (item) => {},
  addCart: (item) => {},
  pruchase: () => {},
});

export default ShoesContext;
