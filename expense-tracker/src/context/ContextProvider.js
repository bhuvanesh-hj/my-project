import React, { useState } from "react";

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

  const addExpenseHandler = (expense) => {
    setExpenseList([...expenseList,expense])
  };

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
