import React, { useReducer } from "react";
import cartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.Identifier === "ADD_ITEM") {
    const updateAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];
    let updateList;
    if (existingCartItem) {
      let updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateList = [...state.items];
      updateList[existingItemIndex] = updateItem;
    } else {
      updateList = state.items.concat(action.item);
    }
    return {
      items: updateList,
      totalAmount: updateAmount,
    };
  } else if (action.Identifier === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedList;
    if (existingCartItem.amount === 1) {
      updatedList = state.items.filter((item) => item.id !== action.id);
    } else {
      let decreaseItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedList = [...state.items];
      updatedList[existingItemIndex] = decreaseItem;
    }

    return {
      items:updatedList,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState;
};

const ContextProvider = (props) => {
  // const [items, setItems] = useState([]);
  // const [totalAmount,setTotalAmount]=useState(0)
  // const [quantity,setQuantity]=useState()
  // let count = 1;

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemshandler = (item) => {
    // setItems([...items, item]);
    // if (item) {
    //   items.forEach((meal) => {
    //     if (meal.id === item.id) {
    //       meal.quantity = +meal.quantity + +item.quantity;
    //       count=0;
    //     }
    //   });
    // }
    // if (count) {
    //   setItems([...items, item]);
    // }
    dispatchCartAction({ Identifier: "ADD_ITEM", item: item });
  };
  const removeItemshandler = (id) => {
    // const [quantity,setQuantity]=useState()
    // items.forEach((meal)=>{
    //   if(meal.id===id){
    //     meal.quantity-=1
    //   }
    // })
    dispatchCartAction({ Identifier: "REMOVE_ITEM", id: id });
  };

  // const addAmount = (amount) => {
  //   setTotalAmount(amount);
  // };
  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
