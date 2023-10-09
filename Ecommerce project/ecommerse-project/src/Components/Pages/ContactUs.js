import React, { useRef } from "react";
import classes from "./ContactUs.module.css";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
  const userNameInputRef = useRef();
  const emailInputInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const addUserHamdler = (event) => {
    event.preventDefault();
    const userData = {
      name: userNameInputRef.current.value,
      email: emailInputInputRef.current.value,
      phoneNumber: phoneNumberInputRef.current.value,
    };
    addingToDataBase(userData);
    userNameInputRef.current.value = "";
    emailInputInputRef.current.value = "";
    phoneNumberInputRef.current.value = "";
  };

  const addingToDataBase = async (userData) => {
    const response = await fetch("https://react-http-91704-default-rtdb.firebaseio.com/contactUs.json", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Thank you for contacting us")
  };

  return (
    <form onSubmit={addUserHamdler} className={classes.control}>
      <h1>Contact us</h1>
      <label>UserName</label>
      <input type="text" ref={userNameInputRef} required />
      <label>Email ID</label>
      <input type="email" ref={emailInputInputRef} required />
      <label>Phone number</label>
      <input type="number" ref={phoneNumberInputRef} required />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactUs;
