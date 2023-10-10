import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Fotter/Footer";
import Products from "./Components/Main/Products";
import Cart from "./Components/Cart/Cart";
import { Button, Container } from "react-bootstrap";
import CartContextProvider from "./Components/Store/CartContextProvider";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
import { Route, Switch, Redirect } from "react-router-dom";
import ProductDetail from "./Components/Pages/ProductDetail";
import LogInPage from "./Components/Pages/LogInPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { path: "/products", element: <Products /> },
//       { path: "/about", element: <About /> },
//       { path: "/home", element: <Home /> },
//       { path: "/contactUs", element: <ContactUs /> },
//     ],
//   },
// ]);

function App() {
  const [cartValid, setCartValid] = useState(false);

  const CartHandler = (valid) => {
    setCartValid(valid);
  };

  return (
    <CartContextProvider>
      <NavBar show={CartHandler} />
      {cartValid && <Cart hide={CartHandler} />}
      <Main />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/products" exact>
            <Container className="m-auto">
              <Products />
              <Button onClick={() => CartHandler(true)} variant="dark">
                See Cart
              </Button>
            </Container>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/login">
                <LogInPage/>
          </Route>
          <Route path="*">
              <Redirect to="/home"/>
          </Route>
        </Switch>
      </main>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
