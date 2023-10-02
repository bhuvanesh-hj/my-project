import React from "react";
import Card from "./Card";
import ReactDom from "react-dom";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.close}>Okay</Button>
      </footer>
    </Card>
  );
};
const Error = (props) => {
  return (
    <React.Fragment>
      {/* <div className={classes.backdrop} onClick={props.close}/> */}
      {/* <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.close}>Okay</Button>
        </footer>
      </Card> */}
      {ReactDom.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.title}
          close={props.close}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Error;
