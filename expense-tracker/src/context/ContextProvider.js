import React, { useState } from "react";

const Context = React.createContext({
  idToken: "",
  loginStatus: false,
  logIn: (item) => {},
});

export const ContextProvider = ({ children }) => {
  const token = localStorage.getItem("idToken");
  const [idToken, setIdToken] = useState(token);

  let login = !!idToken;

  const loginHandler = (user) => {
    setIdToken(user.idToken);
    localStorage.setItem("idToken", user.idToken);
  };

  const context = {
    idToken: idToken,
    loginStatus: login,
    logIn: loginHandler,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Context;
