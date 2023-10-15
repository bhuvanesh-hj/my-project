import React, { useContext, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Context from "../context/ContextProvider";
import { useDispatch} from "react-redux"
import { authActions } from "../store/AuthReducers";
import { fetchExpenseList } from "../store/ExpenseReducers";

const Login = () => {
const dispatch = useDispatch()

  // const ctx = useContext(Context);
  const [login, setLogin] = useState(true);
  const [forgot, setForgot] = useState(false);
  const [loading, setLoading] = useState(false);
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

    setLoading(true)
    if (forgot) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: form.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            setLoading(false)
            alert("Sucessfully sent pasword change link to your email");
            setForgot(!forgot);
            return;
          } else {
            throw new Error("Failed to send request");
          }
        })
        .catch((error) => {
          setLoading(false)
          alert(error);
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
                  setLoading(false)
                  dispatch(authActions.login(data.idToken))
                  // ctx.logIn(data);
                  history.replace("/home");
                  e.target.reset();
                } else {
                  setLoading(false)
                  setLogin(true);
                }
              });
            } else {
              throw new Error("Authentication failed");
            }
          })
          .catch((error) =>{
            setLoading(false)
            alert(error.message)
          } );
      } else {
        setLoading(false)
        alert("Password did not match");
        return;
      }
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
            {login
              ? forgot
                ? "Enter the email with which you have registered"
                : "Login"
              : "Signup"}
          </h3>
        </div>
        <div className="card-body">
          <Form onSubmit={submitHandler}>
            <FormLabel>Email :</FormLabel>
            <FormControl type="email" name="email" onChange={handleChange} />
            {!forgot ? (
              <div>
                <FormLabel>Password :</FormLabel>
                <FormControl
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            ) : (
              ""
            )}
            {login ? (
              <a
                href="#"
                onClick={() => setForgot(!forgot)}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "rgb(210,0,0)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {!forgot ? "Forgot password?" : "Have an account? Login"}
              </a>
            ) : (
              ""
            )}
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
              {loading ? "Loading..." : login ? (forgot ? "Send link" : "LOG IN") : "SIGN UP"}
            </Button>
          </Form>
        </div>
      </div>
      {!forgot && <Alert variant="success">
        <a
          href="#"
          onClick={() => setLogin(!login)}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "rgb(21,87,36)",
          }}
        >
          {!login ? "Have an account? Login" : "Create a new account? Signup"}
        </a>
      </Alert>}
    </div>
  );
};

export default Login;
