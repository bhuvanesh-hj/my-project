import { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Fotter/Footer";
import Products from "./Components/Main/Products";
import Cart from "./Components/Cart/Cart";
import { Prev } from "react-bootstrap/esm/PageItem";

function App() {
  const [cartValid, setCartValid] = useState(false);

  const CartHandler = (valid) => {
    setCartValid(valid);
  };

  return (
    <Fragment>
      <NavBar show={CartHandler}/>
      <main>
        {cartValid && <Cart hide={CartHandler} />}
        <Main />
        <Products />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
