import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./CartReducer";
import uiReducer from "./Ui-Slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: CartReducer },
});

export default store;
