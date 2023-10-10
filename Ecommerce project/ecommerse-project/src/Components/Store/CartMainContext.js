import React from "react";

const CartMainContext = React.createContext({
  idToken:null,
  isLoggedIn:false,
  logIn:(token)=>{},
  logOut:()=>{},
  cartList: [],
  addList: (item) => {},
  removeList: (item) => {},
});

export default CartMainContext;
