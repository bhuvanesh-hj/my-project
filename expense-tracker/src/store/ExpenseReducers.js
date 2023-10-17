import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "Expense",
  initialState: {
    ExpenseList: [],
    changed: false,
  },
  reducers: {
    replaceList(state, action) {
      state.ExpenseList = action.payload.expense;
    },
    addExpense(state, action) {
      const newItem = action.payload;
      const existItem = state.ExpenseList.find(
        (item) => item.id === newItem.id
      );
      state.changed = true;
      if (!existItem) {
        state.ExpenseList.push({
          ...newItem,
          id: Math.floor(Math.random() * 100 + 1),
        });
      } else {
        existItem.Price = newItem.Price;
        existItem.Description = newItem.Description;
        existItem.Category = newItem.Category;
      }
    },
    deleteExpense(state, action) {
      const newItem = action.payload;
      const existItem = state.ExpenseList.find(
        (item) => item.id === newItem.id)
      state.changed = true;
      state.ExpenseList = state.ExpenseList.filter((item) => item !== existItem);
    },
  },
});

export const expenseActions = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
