import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartIsActive = useSelector((state) => state.ui.cartVisible);
  return (
    <Layout>
      {cartIsActive && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
