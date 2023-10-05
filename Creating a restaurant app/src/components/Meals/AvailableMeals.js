import React from "react";
import classes from "./AvailableMeals.module.css";
import MealList from "./MealList";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 499,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 199,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 250,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 150,
  },
];
const AvailableMeals = () => {
  //   const meals = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
           
            <MealList
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
