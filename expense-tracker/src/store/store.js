import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducers";
import ExpenseReducer from "./ExpenseReducers";

const store = configureStore({
  reducer: { auth: AuthReducer, expense: ExpenseReducer },
});

export default store;
