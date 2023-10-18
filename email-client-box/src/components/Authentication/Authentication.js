import React, { useState } from "react";

import "./Authentication.css";
import { GrClose } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Authentication = () => {
  const [login, setLogin] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const loginHandler = () => {
    setLogin((prev) => !prev);
  };

  const forgotHandler = () => {
    setForgot((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (forgot) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: values.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            alert("Sucessfully sent pasword change link to your email");
            setForgot(!forgot);
            return;
          } else {
            throw new Error("Failed to send request");
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      let URL = "";
      if (login) {
        URL =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk";
      } else {
        URL =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk";
      }
      if (login ? login : values.password === values.confirmPassword) {
        fetch(URL, {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.ok) {
              if (login) {
              } else {
                console.log("User sucessfully signedup");
                setLogin(true);
              }
            } else {
              throw new Error("Authentication failed!");
            }
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert("Password did not match");
        return;
      }
    }
  };
  return (
    <div className="form_container">
      <GrClose className="form_close" />
      <div className="form login_form">
        <form onSubmit={submitHandler}>
          <h2>
            {login
              ? forgot
                ? "Enter youtr registered email"
                : "Login"
              : "Signup"}
          </h2>
          <div className="input_box">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleChange("email")}
              required
            />
            <i className="email">
              <HiOutlineMail />
            </i>
          </div>
          {!forgot ? (
            <div className="input_box">
              <input
                type={values.showPassword ? "text" : "password"}
                onChange={handleChange("password")}
                value={values.password}
                minLength={7}
                placeholder="Enter your password"
                required
              />
              <i className="password">
                <BiLockAlt />
              </i>
              <i
                className="hide"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </i>
            </div>
          ) : (
            ""
          )}
          {!login && (
            <div className="input_box">
              <input
                type={values.showConfirmPassword ? "text" : "password"}
                onChange={handleChange("confirmPassword")}
                value={values.confirmPassword}
                minLength={7}
                placeholder="Confirm your password"
                required
              />
              <i className="password">
                <BiLockAlt />
              </i>
              <i
                className="hide"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </i>
            </div>
          )}
          {login && !forgot && (
            <div className="option_field">
              <span className="checkbox">
                <input type="checkbox" />
                <label htmlFor="check">Remenber me</label>
              </span>
              <a href="#" onClick={forgotHandler}>
                Forgot password?
              </a>
            </div>
          )}
          <button type="submit" className="button">
            {login ? (forgot ? "Send Link" : "Login Now") : "Sign up"}
          </button>
          {forgot && (
            <div className="login_sigup">
              {" "}
              "Go back "
              <a href="#" id="sigup" onClick={forgotHandler}>
                Login
              </a>
            </div>
          )}
          {!forgot && (
            <div className="login_sigup">
              {login ? "Don't have an account?" : "Already have an account?"}
              <a href="#" id="sigup" onClick={loginHandler}>
                {login ? "Signup" : "Login"}
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Authentication;
