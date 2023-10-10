import React, { useState } from "react";
import ControlContext from "./ControlContext";

const ControlContextProvider = (props) => {
  const [saveToken, setSaveToken] = useState(null);
  
  const isLogedInStatus= !!saveToken

  const addTokenHandler = (token) => {
    setSaveToken(token);
  };

  const removeTokenHandler = () => {
    setSaveToken(null);
  };

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
