import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
import { authActions } from "../../store/AuthSlice";
import { AiOutlineUser } from "react-icons/ai";

const Header = ({ show }) => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const email = useSelector((state) => state.auth.email);
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/home" className="nav_logo">
          Mail-BOX
        </NavLink>
        {loginStatus && (
          <h5>
            <AiOutlineUser className="user" />{" "}
            {email?.replace("@gmail.com", "")}
          </h5>
        )}
        <NavLink to="/auth">
          {loginStatus ? (
            <button
              className="button"
              onClick={() => dispatch(authActions.logout())}
            >
              Log out
            </button>
          ) : (
            <button className="button" to="/auth">
              Log in
            </button>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
