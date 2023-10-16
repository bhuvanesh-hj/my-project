import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendData, fetchData } from "./store/CartActions";

// to avoid the useeffect while mounting calling the fetch function
let initial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsActive = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const showNotification = useSelector((state) => state.ui.notificationVisible);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        />
      )}
      <Layout>
        {cartIsActive && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
