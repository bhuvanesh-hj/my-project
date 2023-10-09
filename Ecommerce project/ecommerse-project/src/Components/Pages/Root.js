import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar";
import CartContextProvider from "../Store/CartContextProvider";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";
import Footer from "../Fotter/Footer";

const Root = () => {
  const [cartValid, setCartValid] = useState(false);

  const CartHandler = (valid) => {
    setCartValid(valid);
  };

  return (
    <CartContextProvider>
      <NavBar  show={CartHandler} />
      {cartValid && <Cart hide={CartHandler} />}
      <Main />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </CartContextProvider>
  );
};

export default Root;
