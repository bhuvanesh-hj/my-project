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
});

export const ContextProvider = ({ children }) => {
  const token = localStorage.getItem("idToken");
  const email = localStorage.getItem("email");
  const [idToken, setIdToken] = useState(token);
  const [emailVerify, setEmailVerify] = useState(email);
  const [expenseList, setExpenseList] = useState([]);

  let login = !!idToken;

  let emailVerifyed = !!emailVerify;

  const loginHandler = (user) => {
    setIdToken(user.idToken);
    localStorage.setItem("idToken", user.idToken);
  };

  const logoutHandler = () => {
    setIdToken(null);
    // setEmailVerify(null);
    localStorage.clear("idToken");
  };

  const emailHandler = (email) => {
    setEmailVerify(email);
    localStorage.setItem("email", email);
  };

  const fetchExpenseList = async () => {
    const response = await fetch(
      "https://react-http-91704-default-rtdb.firebaseio.com/Expense.json"
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
    setExpenseList(loadedList)
  };

  const addExpenseHandler = async (expense) => {
    const response = await fetch(
      "https://react-http-91704-default-rtdb.firebaseio.com/Expense.json",
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

  useEffect(()=>{
    fetchExpenseList()
  },[])

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
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Context;
