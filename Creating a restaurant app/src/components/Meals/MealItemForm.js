import React, { useContext, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import cartContext from "../../store/cartContext";
const MealItemForm = (props) => {
  const amountInputref = useRef();
  // const mealCtx = useContext(cartContext);
  const addItemsToList = (event) => {
    event.preventDefault();
    // const quantity = document.getElementById("amount_" + props.item.id).value;
    // mealCtx.addItems({ ...props.item});
    // mealCtx.addAmount(quantity)
    const amount = amountInputref.current.value;
    const amountNumber = +amount;
    props.addAmount(amountNumber);
  };
  return (
    <form className={classes.form}>
      <Input
        ref={amountInputref}
        lable="Amount "
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemsToList}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
