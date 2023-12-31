import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={()=>props.hide(false)} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const pointerElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop hide={props.hide}/>, pointerElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, pointerElement)}
    </Fragment>
  );
};

export default Modal;
