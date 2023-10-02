import { useState } from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
 

  
  return (
    <Card className={classes.users}>
      
      <ul>
        {props.user.length === 0 && (
          <i>NOTE: List is empty please add the users!</i>
        )}
        {props.user.map((user, i) => (
          <li key={user.id}>
            {i + 1}.
            {user.Username} ({user.Age} years old) ({user.CollegeName} college)
            <button
              className={classes.btn}
              onClick={() => props.delete(user.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
