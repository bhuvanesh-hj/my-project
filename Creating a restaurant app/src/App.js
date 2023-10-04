import { Fragment } from "react";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
function App() {
  return (
    <Fragment>
      <Cart/>
     <Header/>
     <main>
    <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
