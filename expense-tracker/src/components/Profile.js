import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  FormLabel,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import Context from "../context/ContextProvider";

const Profile = () => {
  const ctx = useContext(Context);
  const [details, setDetails] = useState({
    fullName: "",
    photoUrl: "",
  });

  const changeHandler = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.idToken,
          displayName: details.fullName,
          photoUrl: details.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
        } else {
          throw new Error("error");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyClkgrmSBh9jRlBzGcgjl8AylcyIuya_vk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) =>
              setDetails({
                fullName: data.users[0].displayName,
                photoUrl: data.users[0].photoUrl,
              })
            );
        } else {
          res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <Container
        style={{
          width: "50%",
          margin: "30px auto",
          backgroundColor: "rgb(246,247,242)",
          padding: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>Contact details </h5>
          <Button size="sm" variant="outline-danger">
            Cancel
          </Button>
        </div>
        <Form onSubmit={submitHandler}>
          <FaUserCircle style={{ fontSize: "20px", marginRight: "10px" }} />
          <FormLabel>Full Name:</FormLabel>
          <FormControl
            type="text"
            onChange={changeHandler}
            name="fullName"
            value={details.fullName}
          />
          <HiOutlineLink style={{ fontSize: "20px", marginRight: "10px" }} />
          <FormLabel>Profile Photo URL:</FormLabel>
          <FormControl
            type="url"
            onChange={changeHandler}
            name="photoUrl"
            value={details.photoUrl}
          />
          <br />
          <Button variant="outline-dark" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;
