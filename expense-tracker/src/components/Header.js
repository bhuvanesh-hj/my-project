import React, { useContext } from "react";
import { Navbar, Container, NavbarBrand, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Context from "../context/ContextProvider";

const Header = () => {
  const ctx = useContext(Context);
  const history = useHistory();

  const verifyEmailHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: ctx.idToken,
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
            ctx.verifyEmail(data.email);
            history.replace("/profile");
          });
        } else {
          throw new Error("Failed to send the confirmation code ");
        }
      })
      .catch((error) => alert(error));
  };

  const logOutHandlerNav = () => {
    ctx.logOut();
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
          {ctx.loginStatus && !ctx.emailVerified ? (
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

          {ctx.loginStatus ? (
            <Button onClick={logOutHandlerNav} size="sm" variant="outline-danger">LogOut</Button>
          ) : (
            <NavLink
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              <Button onClick={logOutHandlerNav} size="sm" variant="success">Log In</Button>
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
