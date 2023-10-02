import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Error from "../UI/Error";
const AddUser = (props) => {
  const nameInputUser = useRef();
  const ageInputUser = useRef();
  const collegeInputUser = useRef();
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [vaild, setVaild] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputUser.current.value;
    const enteredAge = ageInputUser.current.value;
    const enteredCollegeName = collegeInputUser.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setVaild({
        title: "Invalid Input",
        message: "Please enter the valid name, age & college name.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setVaild({
        title: "Invalid age",
        message: "Please enter the age (>1).",
      });
      return;
    }

    props.getuser(enteredName, enteredAge, enteredCollegeName);
    nameInputUser.current.value = "";
    ageInputUser.current.value = "";
    collegeInputUser.current.value = "";
  };

  // const onChangeUserName = (e) => {
  //   setEnteredUserName(e.target.value);
  // };
  // const onChangeAge = (e) => {
  //   setEnteredAge(e.target.value);
  // };
  const clearError = () => {
    setVaild(null);
  };
  return (
    <>
      {vaild && (
        <Error title={vaild.title} message={vaild.message} close={clearError} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // onChange={onChangeUserName}
            // value={enteredUserName}
            ref={nameInputUser}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            // onChange={onChangeAge}
            // value={enteredAge}
            ref={ageInputUser}
          />
          <label htmlFor="collegeName">College name</label>
          <input
            type="text"
            id="collegeName"
            // onChange={onChangeAge}
            // value={enteredAge}
            ref={collegeInputUser}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
