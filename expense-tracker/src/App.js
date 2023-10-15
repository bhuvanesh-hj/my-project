import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useContext } from "react";
import Context from "./context/ContextProvider";
import Profile from "./components/Profile";

function App() {
  const ctx = useContext(Context);
  return (
    <div className="App" style={{backgroundColor:"rgb(13,17,23)",height:"100vh"}}>
      <Header />
      <div >
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          {ctx.loginStatus ? (
            <Route eact path="/profile" component={Profile} />
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
      <footer
        style={{
          backgroundColor: "rgb(0,123,255)",
          fontSize: "24px",
          color: "white",
          textAlign: "center",
          // marginTop:"0"
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Fotter />
      </footer>
    </div>
  );
}

export default App;
