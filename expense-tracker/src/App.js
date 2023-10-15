import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useContext } from "react";
import Context from "./context/ContextProvider";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const darkMode = useSelector((state) => state.premium.darkMode);
  // const ctx = useContext(Context);
  return (
    <div
      className="App"
      style={
        darkMode
          ? { background: "rgb(18,18,18)", height: "100vh" }
          : {
              background: "rgb(131,58,180)",
              background:
                "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
              height: "100vh",
            }
      }
    >
      <Header />
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          {loginStatus ? (
            loginStatus && <Route eact path="/profile" component={Profile} />
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
      <footer
        style={
          darkMode
            ? {
                background: "rgb(32,32,32)",
                fontSize: "24px",
                color: "white",
                textAlign: "center",
                // marginTop:"0"
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              }
            : {
                background: "rgb(2,0,36)",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                fontSize: "24px",
                color: "white",
                textAlign: "center",
                // marginTop:"0"
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
              }
        }
      >
        <Fotter />
      </footer>
    </div>
  );
}

export default App;
