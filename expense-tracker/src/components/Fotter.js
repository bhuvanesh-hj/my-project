import React from "react";

const Fotter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin:"0 20px",
        padding:"3px 0 0 0"
      }}
    >
        
      <p style={{ fontSize: "16px" }}>My expense tracker</p>
      <p style={{ fontSize: "16px" }}>
        Copyright &copy; <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
};

export default Fotter;
