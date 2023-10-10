import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import CartMainContext from "../Store/CartMainContext";

const LogInPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const ctx = useContext(CartMainContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
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
        ctx.logIn(data.idToken);
        emailInputRef.current.value=""
        passwordInputRef.current.value=""
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
        <h3>Please sign in</h3>
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
        LogIn
      </Button>
    </Form>
  );
};

export default LogInPage;
