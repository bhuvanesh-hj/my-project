import React, { useContext } from "react";
import { Navbar, Container, NavbarBrand, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
// import Context from "../context/ContextProvider";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/AuthReducers";
import { fetchExpenseList } from "../store/ExpenseReducers";

const Header = () => {
  const dispatch = useDispatch();

  const idToken = useSelector((state) => state.auth.idToken);
  const emailVerified = useSelector((state) => state.auth.emailVerified);
  const loginStatus = useSelector(state=>state.auth.loginStatus)

  // const ctx = useContext(Context);
  const history = useHistory();

  const verifyEmailHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          // idToken: ctx.idToken,
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            alert("Otp sent to your email! please check it out");
            dispatch(authActions.verifyEmail(data.email))
            // ctx.verifyEmail(data.email);
            history.replace("/profile");
          });
        } else {
          throw new Error("Failed to send the confirmation code ");
        }
      })
      .catch((error) => alert(error));
  };

  const logOutHandlerNav = () => {
    // ctx.logOut();
    dispatch(authActions.logout())
    history.replace("/login");
  };

  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <NavbarBrand>
          <NavLink
            to="/home"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Expense Tracker
          </NavLink>
        </NavbarBrand>
        <Nav className="mb-lg-0">
          <NavLink
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Profile
          </NavLink>
          <NavLink
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            About
          </NavLink>
          {loginStatus && !emailVerified ? (
            <NavLink
              to="/profile"
              onClick={verifyEmailHandler}
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Verify email
            </NavLink>
          ) : (
            ""
          )}

          {loginStatus ? (
            <Button
              onClick={logOutHandlerNav}
              size="sm"
              variant="outline-danger"
            >
              LogOut
            </Button>
          ) : (
            <NavLink
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              <Button size="sm" variant="success">
                Log In
              </Button>
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
