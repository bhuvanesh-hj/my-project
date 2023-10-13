import "./App.css";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Login />
      </main>
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
