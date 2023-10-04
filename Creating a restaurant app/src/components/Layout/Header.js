import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>AppMeals</h1>
        <HeaderCartButton shows={props.show}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table full of meals"/>
      </div>
    </Fragment>
  );
};

export default Header;
