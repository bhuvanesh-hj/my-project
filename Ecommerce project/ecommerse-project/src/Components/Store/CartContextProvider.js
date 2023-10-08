import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

        const addCartItemsHandler=(item)=>{
            console.log(item)
                setCartItems([...cartItems,item])
        }

        const removeCartItemsHandler=(item)=>{
            setCartItems(cartItems.filter((product)=> product.name!=item.name))
        }

  const cartContext = {
    cartItems: cartItems,
    addItems: addCartItemsHandler,
    removeItems: removeCartItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
