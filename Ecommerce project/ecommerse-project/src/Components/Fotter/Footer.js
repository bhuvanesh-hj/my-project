import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    // <div
    //   style={{
    //     height: 100,
    //     marginTop:20,
    //     backgroundColor: "rgb(45,168,184)",
    //     color: "rgb(244,249,253)",
    //     display: "flex",
    //     justifyContent: "flex-start",
    //     paddingLeft: 20,
    //     fontSize:50,
    //     alignItems: "center",
    //     fontFamily: "cursive",
    //   }}
    // >
    //   The Generics
    // </div>
    <footer className="page-footer font-small blue pt-4">
      <div
        className="container-fluid text-center text-md-left"
        style={{
          backgroundColor: "rgb(45,168,184)",
          color: "white",
          height: 80,
          alignItems: "flex-start",
        }}
      >
        <h5 className="text-uppercase font-serif">The Generics</h5>
      </div>
    </footer>
  );
};

export default Footer;
