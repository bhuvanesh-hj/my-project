import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Authentication from "./components/Authentication/Authentication";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  const authShowHandler = () => {
    setAuth(true);
  };

  const authHideHandler = () => {
    setAuth(false);
  };

  return (
    <div className="App">
      <Header show={authShowHandler} />
      <section className="home">
        <Switch>
          <Route exact path="/home" component={Home} />
          {auth && (
            <Route exact path="/auth">
              <Authentication hide={authHideHandler} />
            </Route>
          )}
        </Switch>
      </section>
    </div>
  );
}

export default App;
