import { Switch, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Authentication from "./components/Authentication/Authentication";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { mailAction } from "../src/store/MailSlice";


function App() {
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const isInitialRef = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitialRef.current) {
      isInitialRef.current = false;
      fetch(
        "https://react-http-91704-default-rtdb.firebaseio.com/mailClient.json"
      )
        .then((response) => {
          if (!response) {
            throw new Error("Network issue");
          }
          return response.json();
        })
        .then((mailData) => {
          if (mailData) {
            Object.keys(mailData).forEach((mailId) => {
              let temp = {
                mailId,
                ...mailData[mailId],
              };
              if (
                temp.sender === localStorage.getItem("email") ||
                temp.reciver === localStorage.getItem("email")
              ) {
                dispatch(mailAction.addMail(temp));
              }
            });
          }
        })
        .catch((error) => {
          alert(error.message)
          console.log(error);
        });
      return;
    }
  }, [dispatch,loginStatus]);
  return (
    <div className="App">
        <Header />
      <section className="home">
        <Switch>
          {loginStatus && <Route exact path="/home">
            <Home/>
          </Route>}
          {!loginStatus && (
            <Route exact path="/auth">
              <Authentication />
            </Route>
          )}
        </Switch>
      </section>
    </div>
  );
}

export default App;
