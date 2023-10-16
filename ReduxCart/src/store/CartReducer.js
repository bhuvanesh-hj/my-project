import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    cartActive: false,
  },
  reducers: {
    cartHandler(state) {
      state.cartActive = !state.cartActive;
    },
    addToCart(state, action) {
      const existIndex = state.cart.findIndex(
        (item) => item.title === action.payload.title
      );
      
      const existItem = state.cart[existIndex];
      if (existItem) {
        
        const item = {
          ...existItem,
          quantity: existItem.quantity + 1,
        };
        const updateCart = [...state.cart];
        updateCart[existIndex] = item;
        console.log(updateCart)
        state.cart =updateCart;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
