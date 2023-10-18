import React, { useState } from "react";

import "./Home.css";
import { BiPencil } from "react-icons/bi";
import ComposeMail from "../ComposeMail/ComposeMail";

const Home = () => {
  const [compose, setCompose] = useState("");

  const composeHanlder = (value) => {
    setCompose(value);
  };
  return (
    <div className="main_container">
      <div className="side_bar">
        <h3>mail</h3>
        <button onClick={() => composeHanlder(true)}>
          <BiPencil className="pencil" />
          Compose
        </button>
        <ul>
          <li>Inbox</li>
          <li>Inbox</li>
          <li>Inbox</li>
          <li>Inbox</li>
          <li>Inbox</li>
        </ul>
      </div>
      <div></div>
      {compose && <ComposeMail onClick={composeHanlder} />}
    </div>
  );
};

export default Home;
