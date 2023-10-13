import "./App.css";
import {Route, Switch} from "react-router-dom"
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
            {/* <Home /> */}
            {/* <Login /> */}
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
