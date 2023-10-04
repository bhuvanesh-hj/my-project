import React, { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartCheck = (valid) => {
    setShowCart(valid);
  };
  return (
    <Fragment>
      {showCart && <Cart hide={showCartCheck} />}
      <Header show={showCartCheck}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
