import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducers";
import ExpenseReducer from "./ExpenseReducers";
import PremiumReducer from "./PremiumReducers";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    expense: ExpenseReducer,
    premium: PremiumReducer,
  },
});

export default store;
