import React, { useReducer, useState } from "react";
import cartContext from "./cartContext";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };
// const cartReducer = (state, action) => {
//   if (action.Identifier === "ADD_ITEM") {
//     const updateAmount =
//       state.totalAmount + action.item.price * action.item.amount;

//     const existingItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[existingItemIndex];
//     let updateList;
//     if (existingCartItem) {
//       let updateItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + action.item.amount,
//       };
//       updateList = [...state.items];
//       updateList[existingItemIndex] = updateItem;
//     } else {
//       updateList = state.items.concat(action.item);
//     }
//     return {
//       items: updateList,
//       totalAmount: updateAmount,
//     };
//   } else if (action.Identifier === "REMOVE_ITEM") {
//     const existingItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingCartItem = state.items[existingItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingCartItem.price;
//     let updatedList;
//     if (existingCartItem.amount === 1) {
//       updatedList = state.items.filter((item) => item.id !== action.id);
//     } else {
//       let decreaseItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount - 1,
//       };
//       updatedList = [...state.items];
//       updatedList[existingItemIndex] = decreaseItem;
//     }

//     return {
//       items:updatedList,
//       totalAmount:updatedTotalAmount
//     }
//   }
//   return defaultCartState;
// };

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );
  
  const addItemshandler = (item) => {
    setTotalAmount((prev) => prev + item.price * item.amount);

    const existItemIndex = items.findIndex((meal) => meal.id === item.id);
    const existCartItem = items[existItemIndex];
    if (existCartItem) {
      let updateItem = {
        ...existCartItem,
        amount: existCartItem.amount + item.amount,
      };
      const updateItems = [...items];
      updateItems[existItemIndex] = updateItem;
      setItems([...updateItems]);
    } else {
      setItems([...items, item]);
    }

    // dispatchCartAction({ Identifier: "ADD_ITEM", item: item });
  };
  const removeItemshandler = (id) => {
    const existItemIndex = items.findIndex((meals) => meals.id === id);
    const existCartItem = items[existItemIndex];
    setTotalAmount((prev) => prev - existCartItem.price);
    if (existCartItem.amount === 1) {
      setItems(items.filter((meals) => meals.id !== id));
    } else {
      let decreaseItem = {
        ...existCartItem,
        amount: existCartItem.amount - 1,
      };
      const updateItems = [...items];
      updateItems[existItemIndex] = decreaseItem;
      setItems([...updateItems]);
    }

    // dispatchCartAction({ Identifier: "REMOVE_ITEM", id: id });
  };

  const CartContext = {
    items: items,
    totalAmount: totalAmount,
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
