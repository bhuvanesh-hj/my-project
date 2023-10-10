import React, { useState } from "react";

import ControlContext from "./ControlContext";

const ControlContextProvider = (props) => {
  const getTokenFromLocalStorage = localStorage.getItem("token")
  const [saveToken, setSaveToken] = useState(getTokenFromLocalStorage);

  const isLogedInStatus = !!saveToken;

  const addTokenHandler = (token) => {
    setSaveToken(token);
    localStorage.setItem("token",token)
  };

  const removeTokenHandler = () => {
    setSaveToken(null);
    localStorage.removeItem("token")
  };

  if(isLogedInStatus){
    setTimeout(()=>{
      removeTokenHandler()
    },300000)
  }

  const controlContext = {
    logedIn: isLogedInStatus,
    idToken: saveToken,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
  };

  console.log(saveToken);
  return (
    <ControlContext.Provider value={controlContext}>
      {props.children}
    </ControlContext.Provider>
  );
};

export default ControlContextProvider;
