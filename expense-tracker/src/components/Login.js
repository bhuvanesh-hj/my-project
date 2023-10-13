import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Alert,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

 
  const history = useHistory();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let URL = "";
    if (login) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk";
    } else {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk";
    }
    if (login ? login : form.password === form.confirm_password) {
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            res.json().then(async (data) => {
              if (login) {
                localStorage.setItem("idToken", data.idToken);
                history.replace("/home");
                e.target.reset();
              } else {
                setLogin(true);
              }
            });
          } else {
            throw new Error("Authentication failed");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Password did not match");
      return;
    }
  };

  return (
    <div className="container" style={{ width: "30%", marginTop: "6px" }}>
      <div className="card">
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(0,123,255)" }}
        >
          <h3 className="title" style={{ color: "white", textAlign: "center" }}>
            {login ? "Login" : "Signup"}
          </h3>
        </div>
        <div className="card-body">
          <Form onSubmit={submitHandler}>
            <FormLabel>Email :</FormLabel>
            <FormControl type="email" name="email" onChange={handleChange} />
            <FormLabel>Password :</FormLabel>
            <FormControl
              type="password"
              name="password"
              onChange={handleChange}
            />
            {!login && (
              <div>
                <FormLabel>Confirm Password :</FormLabel>
                <FormControl
                  type="password"
                  name="confirm_password"
                  onChange={handleChange}
                />
              </div>
            )}
            <br />
            <Button style={{ width: "100%" }} type="submit">
              {login ? "LOG IN" : "SIGN UP"}
            </Button>
          </Form>
        </div>
      </div>
      <Alert variant="success">
        <a
          href="#"
          onClick={() => setLogin(!login)}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "rgb(21,87,36)",
          }}
        >
          {login ? "Create a new account? Signup" : "Have an account? Login"}
        </a>
      </Alert>
    </div>
  );
};

export default Login;
