import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/Ui-Slice";
import Notification from "./components/UI/Notification";

// to avoid the useeffect while mounting calling the fetch function
let initial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsActive = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const showNotification = useSelector((state) => state.ui.notificationVisible);

  useEffect(() => {
    const sendingRequest = async () => {
      dispatch(
        uiActions.showNotification({
          title: "Pending",
          status: "pending",
          message: "Sending the request wait for a moment...",
        })
      );
      const response = await fetch(
        "https://react-http-91704-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending failed...");
      }
      dispatch(
        uiActions.showNotification({
          title: "Success",
          status: "success",
          message: "Sent sucessfully",
        })
      );
    };

    if (initial) {
      initial = false;
      return;
    }
    
    sendingRequest().catch((error) => {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          status: "error",
          message: "Error while sending the request!!!!",
        })
      );
    });
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
