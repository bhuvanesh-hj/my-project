import React, { useCallback, useEffect, useState } from "react";

const Context = React.createContext({
  idToken: "",
  loginStatus: false,
  logIn: (item) => {},
  verifyEmail: (email) => {},
  emailVerified: false,
  email: "",
  logOut: () => {},
  expenseList: [],
  addExpense: (expense) => {},
  deleteExpense: (id) => {},
  editExpense: (id) => {},
});

export const ContextProvider = ({ children }) => {
  const token = localStorage.getItem("idToken");
  const email = localStorage.getItem("email");
  const [idToken, setIdToken] = useState(token);
  const [emailVerify, setEmailVerify] = useState(email);
  const [expenseList, setExpenseList] = useState([]);

  let login = !!idToken;

  let emailVerifyed = !!emailVerify;
  const fetchExpenseList = async () => {
    const response = await fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/Expense${emailVerify && emailVerify.substring(0,6)}.json`
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
    setExpenseList(loadedList);
  };


  const loginHandler = (user) => {
    setIdToken(user.idToken);
    localStorage.setItem("idToken", user.idToken);
    fetchExpenseList()
  };

  const logoutHandler = () => {
    setIdToken(null);
    setEmailVerify(null);
    localStorage.clear("idToken");
    fetchExpenseList()
  };

  const emailHandler = (email) => {
    setEmailVerify(email);
    localStorage.setItem("email", email);
  };

  
  const addExpenseHandler = async (expense) => {
    const response = await fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/Expense${emailVerify.substring(0,6)}.json`,
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchExpenseList();
  };

  const deleteExpenseHandler = async (id) => {
    let response = await fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/Expense${emailVerify.substring(0,6)}/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchExpenseList();
  };

  const editExpenseHandler = async (expense) => {
    let response = await fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/Expense${emailVerify.substring(0,6)}/${expense.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    fetchExpenseList();
  };

  useEffect(() => {
    fetchExpenseList();
  }, [emailHandler]);

  const context = {
    idToken: idToken,
    loginStatus: login,
    logIn: loginHandler,
    verifyEmail: emailHandler,
    emailVerified: emailVerifyed,
    email: emailVerify,
    logOut: logoutHandler,
    expenseList: expenseList,
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
    editExpense: editExpenseHandler,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Context;
