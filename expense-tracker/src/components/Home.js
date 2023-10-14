import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/ContextProvider";

const Home = () => {
  const ctx = useContext(Context);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 20px",
      }}
    >
      <div>"Welcome to Expense Tracker!"</div>
      {(ctx.loginStatus && !ctx.emailVerified )? (
        <div>
          Your profile Incomplete.<Link to="/profile">Complete now!</Link>
        </div>
      ):""}
    </div>
  );
};

export default Home;
