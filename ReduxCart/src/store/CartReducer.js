import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.cart = action.payload.cart;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.title === newItem.title);
      state.totalQuantity++;
      state.changed = true;
      if (!existItem) {
        state.cart.push({
          title: newItem.title,
          price: newItem.price,
          total: newItem.price,
          quantity: 1,
        });
      } else {
        existItem.quantity++;
        existItem.total = existItem.total + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const newItem = action.payload;
      const existItem = state.cart.find((item) => item.title === newItem.title);
      state.totalQuantity--;
      state.changed = true;
      if (existItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item !== existItem);
      } else {
        existItem.quantity--;
        existItem.total = existItem.total - newItem.price;
      }
    },
  },
});

export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
