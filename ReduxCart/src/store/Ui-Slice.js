import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cartVisible",
  initialState: {
    cartVisible: false,
    notificationVisible: false,
  },
  reducers: {
    showCart(state) {
      state.cartVisible = !state.cartVisible;
    },
    showNotification(state, action) {
      state.notificationVisible = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
