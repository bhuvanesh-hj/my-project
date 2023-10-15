import React, { useState } from "react";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
import CartProvider from './store/Context-provider.js'
function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartCheck = (valid) => {
    setShowCart(valid);
  };
  return (
    <CartProvider>
      {showCart && <Cart hide={showCartCheck} />}
      <Header show={showCartCheck}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
