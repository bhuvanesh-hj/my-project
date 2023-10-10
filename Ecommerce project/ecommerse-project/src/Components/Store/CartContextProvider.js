import React, { useState } from "react";
import CartMainContext from "./CartMainContext";

const CartContextProvider = (props) => {
  const locaalstorageToken = localStorage.getItem("token");
  const [cartItemsList, setCartItemsList] = useState([]);
  const [saveToken, setSaveToken] = useState(locaalstorageToken);

  const logInStatus = !!saveToken;

  const logInHandler=(token)=>{
    setSaveToken(token)
    localStorage.setItem("token",token)
  }

  const logOutHandler=()=>{
    setSaveToken(null)
    localStorage.removeItem("token")
  }

  const addItemsToCart = (item) => {
    const existItemIndex = cartItemsList.findIndex(
      (product) => product.title === item.title
    );
    const existItem = cartItemsList[existItemIndex];
    if (existItem) {
      const updateItem = {
        ...existItem,
        quantity: existItem.quantity + 1,
      };
      const updatedList = [...cartItemsList];
      updatedList[existItemIndex] = updateItem;
      setCartItemsList([...updatedList]);
    } else {
      setCartItemsList([...cartItemsList, item]);
    }
  };

  const removeItemsToCart = (item) => {
    setCartItemsList(
      cartItemsList.filter((product) => product.title !== item.title)
    );
  };

  const cart_Value = {
    idToken: saveToken,
    isLoggedIn: logInStatus,
    logIn: logInHandler,
    logout: logOutHandler,
    cartList: cartItemsList,
    addList: addItemsToCart,
    removeList: removeItemsToCart,
  };
  return (
    <CartMainContext.Provider value={cart_Value}>
      {props.children}
    </CartMainContext.Provider>
  );
};

export default CartContextProvider;
