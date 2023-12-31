import React, { Fragment } from "react";
import classes from "./MealsSummary.module.css";
const Summary = () => {
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favotite meal from ur broad selection of available meal
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients,just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </Fragment>
  );
};

export default Summary;
