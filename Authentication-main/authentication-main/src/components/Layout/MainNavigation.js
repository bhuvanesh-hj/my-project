import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import ControlContext from "../../store/ControlContext";

const MainNavigation = () => {
  const ctxNav = useContext(ControlContext);
  const history = useHistory();

  const isLogedIn = ctxNav.logedIn;

  const logOutHandler = () => {
    ctxNav.removeToken();
    history.replace("/auth")
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>{!isLogedIn && <Link to="/auth">Login</Link>}</li>
          <li>{isLogedIn && <Link to="/profile">Profile</Link>}</li>
          <li>
            {isLogedIn && <button onClick={logOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
