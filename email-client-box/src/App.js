import {Switch, Route} from "react-router-dom"

import "./App.css";
import Authentication from "./components/Authentication/Authentication";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="home">
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/auth" component={Authentication}/>
        </Switch>
      </section>
    </div>
  );
}

export default App;
