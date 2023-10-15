import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"

const BackDrop=(props)=>{
    return <div className={classes.backdrop}/>
}
const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}

const pointerElement = document.getElementById("candyOverlay")

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<BackDrop/>,pointerElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,pointerElement)}
    </Fragment>
  )
}

export default Modal