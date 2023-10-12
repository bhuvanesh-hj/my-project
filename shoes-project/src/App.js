import { Fragment, useState, useEffect, useContext } from "react";

import "./App.css";
import NavBar from "./components/Header/NavBar";
import AddProduct from "./components/product/AddProduct";
import ProductList from "./components/product/ProductList";
import Cart from "./components/Cart/Cart";
import ShoesContext from "./components/store/ShoesContext";

function App() {
  const [modalShow, setModalShow] = useState(false);
  // useContext(ShoesContext)

  const showCartHandler = () => {
    setModalShow(true);
  };
  
  return (
    <Fragment>
      <NavBar cart={showCartHandler} />
      <Cart show={modalShow} onHide={() => setModalShow(false)} />
      <AddProduct />
      <ProductList />
    </Fragment>
  );
}

export default App;
