import React, { useContext } from "react";
import { Navbar, Container, NavbarBrand, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
// import Context from "../context/ContextProvider";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/AuthReducers";
import { premiumActions } from "../store/PremiumReducers";
import Toggle from "./Toggle";
import { FiDownload } from "react-icons/fi";
import { CSVLink } from "react-csv";

const Header = () => {
  const dispatch = useDispatch();

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

  // function makeCsv(list) {
  //   return list.map((r) => <li>Price=${r.Price} Description=${r.Description} Category=${r.Category}</li>);
  // }

  // const blob1 = new Blob([makeCsv(expenseList)]);

  const headers = [
    { label: "Price", key: "Price" },
    { label: "Description", key: "Description" },
    { label: "Category", key: "Category" },
  ];

  // const csvLink = {
  //   filename:"ExpenseList",
  //   headers:headers,
  //   data:expenseList
  // }
  console.log(expenseList);
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
            // <a
            //   href={URL.createObjectURL(blob1)}
            //   style={{
            //     color: "white",
            //     fontSize: "15px",
            //     margin: "0 40px",
            //   }}
            //   download="expenselist.csv"
            // >
            //   Download List <FiDownload />
            // </a>
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
