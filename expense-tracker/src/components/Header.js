import React, { useContext } from "react";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
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
            ctx.verifyEmail(data.email)
            history.replace("/profile");
          });
        } else {
          throw new Error("Failed to send the confirmation code ");
        }
      })
      .catch((error) => alert(error));
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
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            About
          </NavLink>
          {!ctx.emailVerified && (
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
          )}
          <NavLink
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            LogIn
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
