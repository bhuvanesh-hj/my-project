import React from "react";
import { Navbar, Container, NavbarBrand, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
// import Context from "../context/ContextProvider";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/AuthReducers";
import { premiumActions } from "../store/PremiumReducers";
import Toggle from "./Toggle";
import { FiDownload } from "react-icons/fi";
import { LiaHomeSolid } from "react-icons/lia";
import { BsInfoCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CSVLink } from "react-csv";

const Header = () => {
  
  const dispatch = useDispatch()

  const idToken = useSelector((state) => state.auth.idToken);
  const emailVerified = useSelector((state) => state.auth.emailVerified);
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const premium = useSelector((state) => state.premium.isSubscribed);
  const darkMode = useSelector((state) => state.premium.darkMode);
  const expenseList = useSelector((state) => state.expense.ExpenseList);

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
            dispatch(authActions.verifyEmail(data.email));
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
    dispatch(authActions.logout());
    dispatch(premiumActions.logoutPremium());
    history.replace("/login");
  };

  // const blob1 = new Blob([makeCsv(expenseList)]);

  const headers = [
    { label: "Price", key: "Price" },
    { label: "Description", key: "Description" },
    { label: "Category", key: "Category" },
  ];

  return (
    <Navbar
      style={
        darkMode
          ? { background: "rgb(32,32,32)" }
          : {
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            }
      }
    >
      <Container>
        <NavbarBrand>
          <NavLink
            to="/home"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Expense Tracker
          </NavLink>
          {premium && (
            <CSVLink
              data={expenseList}
              headers={headers}
              style={{
                color: "white",
                fontSize: "15px",
                margin: "0 40px",
              }}
            >
              Download List <FiDownload />
            </CSVLink>
          )}
        </NavbarBrand>
        <Nav className="mb-lg-0">
          {premium && <Toggle />}
          <NavLink
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            <LiaHomeSolid style={{ margin: "5px" }} />
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
            <CgProfile style={{ margin: "5px" }} />
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
            <BsInfoCircle style={{ margin: "5px" }} />
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
              style={{ borderRadius: "10%" }}
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
              <Button
                size="sm"
                variant="success"
                style={{ borderRadius: "10%" }}
              >
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
