import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cartVisible",
  initialState: {
    cartVisible: false,
  },
  reducers: {
    showCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
