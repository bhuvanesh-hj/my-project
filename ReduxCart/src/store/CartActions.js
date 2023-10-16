import { uiActions } from "./Ui-Slice";
import { cartActions } from "./CartReducer";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchingData = async () => {
      const response = await fetch(
        "https://react-http-91704-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data....");
      }
      const fetchedData = response.json();
      return fetchedData;
    };
    try {
      const cartData = await fetchingData();
      dispatch(
        cartActions.replaceCart({
          cart: cartData.cart || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          status: "error",
          message: "Something went wrong!!!",
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Pending",
        status: "pending",
        message: "Sending the request wait for a moment...",
      })
    );
    const sendingRequest = async () => {
      const response = await fetch(
        "https://react-http-91704-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cart: cart.cart,
            totalQuantity: cart.totalQuantity,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending failed...");
      }
    };

    try {
      await sendingRequest();
      dispatch(
        uiActions.showNotification({
          title: "Success",
          status: "success",
          message: "Sent sucessfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          status: "error",
          message: "Error while sending the request!!!!",
        })
      );
    }
  };
};
