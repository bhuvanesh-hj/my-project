import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <div
      style={{
        height: 200,
        backgroundColor: "rgb(45,168,184)",
        color: "rgb(244,249,253)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:150,
        fontFamily:"cursive",
        marginTop:30
      }}
    >
      The Generics
    </div>
  );
};

export default Main;
