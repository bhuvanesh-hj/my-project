import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     return res?.json();
//  });

export const fetchExpenseList = createAsyncThunk(
  "fetchExpenseList",
  async () => {
    const response = await fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/Expense.json`
    );
    const expenseMainList = await response.json();
    let loadedList = [];
    for (let key in expenseMainList) {
      loadedList.push({
        id: key,
        Price: expenseMainList[key].Price,
        Description: expenseMainList[key].Description,
        Category: expenseMainList[key].Category,
      });
    }
    return loadedList;
  }
);

const ExpenseSlice = createSlice({
  name: "Expense",
  initialState: {
    isLoading: false,
    ExpenseList: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpenseList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchExpenseList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ExpenseList = action.payload;
    });
    builder.addCase(fetchExpenseList.rejected, (state, action) => {
      state.isError = true;
    });
  },
  reducers: {
    addExpense(state, action) {
      fetch(
        `https://react-http-91704-default-rtdb.firebaseio.com/Expense.json`,
        {
          method: "POST",
          body: JSON.stringify(action.payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    deleteExpense(state, action) {
      fetch(
        `https://react-http-91704-default-rtdb.firebaseio.com/Expense/${action.payload}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    editExpense(state, action) {
      fetch(
        `https://react-http-91704-default-rtdb.firebaseio.com/Expense/${action.payload.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify(action.payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
  },
});

export const expenseActions = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
