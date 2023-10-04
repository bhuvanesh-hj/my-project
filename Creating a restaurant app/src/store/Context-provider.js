import React,{ useState } from "react";
import cartContext from "./cartContext";

const ContextProvider = (props) => {
  // const [items, setItems] = useState(array);
  const addItemshandler = (item) => {
  //  setItems([...items,item])
  };
  const removeItemshandler = (id) => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemshandler,
    removeItems: removeItemshandler,
  };

  return (
    <cartContext.Provider value={CartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default ContextProvider;
