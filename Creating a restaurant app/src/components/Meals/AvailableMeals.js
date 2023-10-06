import React from "react";
import classes from "./AvailableMeals.module.css";
import MealList from "./MealList";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idlis and Sambar",
    description: "Best south indian meal",
    price: 499,
  },
  {
    id: "m2",
    name: "Masala dosa",
    description: "Famous in mysore",
    price: 199,
  },
  {
    id: "m3",
    name: "Poori sagu",
    description: "Bangaluru famous",
    price: 250,
  },
  {
    id: "m4",
    name: "Benne (Butter) Masala Dosa",
    description: "Davangere special",
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
