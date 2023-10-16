import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/CartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart.cart)
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(cartActions.cartHandler())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cart.length}</span>
    </button>
  );
};

export default CartButton;
