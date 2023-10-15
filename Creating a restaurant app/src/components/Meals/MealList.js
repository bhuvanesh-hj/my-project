import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartContext from "../../store/cartContext";

const MealList = (props) => {
  const cartCtx = useContext(cartContext)
  const price = `Rs ${props.price}`;
  
  const addItemHandler=(amount)=>{
    cartCtx.addItems({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addAmount={addItemHandler}/>
      </div>
    </li>
  );
};

export default MealList;
