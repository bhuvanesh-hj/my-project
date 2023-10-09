import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Fotter/Footer";
import Products from "./Components/Main/Products";
import Cart from "./Components/Cart/Cart";
import { Button, Container } from "react-bootstrap";
import CartContextProvider from "./Components/Store/CartContextProvider";
import About from "./Components/Pages/About";
import Root from "./Components/Pages/Root";
import Home from "./Components/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

function App() {
  // const [cartValid, setCartValid] = useState(false);

  // const CartHandler = (valid) => {
  //   setCartValid(valid);
  // };

  return (
    <RouterProvider router={router}>
      {/* <CartContextProvider> */}
      {/* <NavBar show={CartHandler} />
        {cartValid && <Cart hide={CartHandler} />}
        <Main /> */}
      <main>
        {/* <Products />
          <Container className="m-auto">
            <Button onClick={() => CartHandler(true)} variant="dark">
              See Cart
            </Button>
          </Container> */}
      </main>
      {/* <Footer />
      </CartContextProvider> */}
    </RouterProvider>
  );
}

export default App;
