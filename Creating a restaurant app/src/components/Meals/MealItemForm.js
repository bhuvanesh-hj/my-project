import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import cartContext from "../../store/cartContext";
const MealItemForm = (props) => {
  const mealCtx = useContext(cartContext);
  // console.log(props.item)
  return (
    <form className={classes.form}>
      <Input
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
      <button onClick={()=>mealCtx.addItems(props.item)}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
