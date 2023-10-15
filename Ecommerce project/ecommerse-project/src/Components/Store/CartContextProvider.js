import React, { useState, useEffect, useContext, useCallback } from "react";
import CartMainContext from "./CartMainContext";

const CartContextProvider = (props) => {
  const locaalstorageToken = localStorage.getItem("token");
  const [saveToken, setSaveToken] = useState(locaalstorageToken);
  const logInStatus = !!saveToken;

  let email = localStorage.getItem("email");
  const [cartItemsList, setCartItemsList] = useState([]);

  const fetchInfo = () => {
    return fetch(
      `https://crudcrud.com/api/bf5b574de4e04d7d883b58f3bf958f2b/cart${email}`
    ).then((res) => {
      return res.json().then((data) => {
        setCartItemsList(data);
      });
    });
  };

  const logInHandler = (token, email) => {
    setSaveToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email.substring(0, 11));
    // fetchInfo()
  };

  const logOutHandler = () => {
    setSaveToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const addItemsToCart = (item) => {
    const existItemIndex = cartItemsList.findIndex(
      (product) => product.title === item.title
    );
    const existItem = cartItemsList[existItemIndex];
    if (existItem) {
      //   const updateItem = {
      //     ...existItem,
      //     quantity: existItem.quantity + 1,
      //   };
      //   const updatedList = [...cartItemsList];
      //   updatedList[existItemIndex] = updateItem;
      //   setCartItemsList([...updatedList]);
      // } else {
      alert("Product already exist");
      return;
    }
    fetch(
      `https://crudcrud.com/api/bf5b574de4e04d7d883b58f3bf958f2b/cart${email}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      fetchInfo();
    });
    // setCartItemsList([...cartItemsList, item]);
    // }
  };

  const removeItemsToCart = (item) => {
    fetch(
      `https://crudcrud.com/api/bf5b574de4e04d7d883b58f3bf958f2b/cart${email}/${item._id}`,
      {
        method: "DELETE",
      }
    ).then((res) => {
      fetchInfo();
    });
    //   setCartItemsList(
    // cartItemsList.filter((product) => product.title !== item.title)
    //   )
  };

  useEffect(() => {
    if (logInStatus) {
      fetchInfo();
    }
  }, [setCartItemsList,logInStatus]);

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
