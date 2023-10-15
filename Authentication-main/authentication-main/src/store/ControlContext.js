import React from "react";

const ControlContext = React.createContext({
  logedIn: false,
  idToken: null,
  addToken: (token) => {},
  removeToken: () => {},
});

export default ControlContext;
