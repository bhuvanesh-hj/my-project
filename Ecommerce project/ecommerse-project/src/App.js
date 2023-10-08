import { Fragment, useState } from "react";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Fotter/Footer";
import Products from "./Components/Main/Products";
import Cart from "./Components/Cart/Cart";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Button, Container } from "react-bootstrap";
import CartContextProvider from "./Components/Store/CartContextProvider";

function App() {
  const [cartValid, setCartValid] = useState(false);

  const CartHandler = (valid) => {
    setCartValid(valid);
  };

  return (
    <CartContextProvider>
      <NavBar show={CartHandler} />
      <main>
        {cartValid && <Cart hide={CartHandler} />}
        <Main />
        <Products />
        <Container className="m-auto">
          <Button onClick={() => CartHandler(true)} variant="dark">
            See Cart
          </Button>
        </Container>
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
