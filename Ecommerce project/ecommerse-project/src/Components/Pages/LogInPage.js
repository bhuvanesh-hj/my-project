import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import CartMainContext from "../Store/CartMainContext";

const LogInPage = () => {
  const [logIn, setLogIn] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const ctx = useContext(CartMainContext);

  const logInHandler = () => {
    setLogIn((prev) => !prev);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let URL = "";
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (logIn) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk";
    } else {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk";
    }

    fetch(
      URL,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.idToken,
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        ctx.logIn(data.idToken, data.email);
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        history.replace("/products");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Form
      style={{
        width: "35%",
        margin: "auto",
        marginTop: "20px",
        border: "1px solid",
        padding: "25px",
        borderRadius: "10px",
      }}
      onSubmit={submitHandler}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Please sign {logIn ? "in" : "up"}</h3>
      </div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailInputRef}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
          required
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        {logIn ? "LogIn" : "Sign up"}
      </Button>
      <br />
      <a onClick={logInHandler} href="#" style={{ cursor: "pointer" }}>
        {logIn ? "Create a new account" : "Already have an account"}
      </a>
    </Form>
  );
};

export default LogInPage;
