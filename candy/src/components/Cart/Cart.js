import React, { useContext } from "react";
import Modal from "../UI/Modal";
import candyContext from "../store/CandyContext";
const Cart = (props) => {
  const ctxCart = useContext(candyContext);
  const itemsCart=ctxCart.cartItems.map((item)=><li>{item.name}--{item.price}-- X{item.amount}</li>)
  return <Modal>{itemsCart}
  <button onClick={()=>props.hide(false)}>close</button>
  <button>Order</button></Modal>;
};

export default Cart;
