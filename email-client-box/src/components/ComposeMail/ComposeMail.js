import React, { useRef, useState } from "react";
import "./ComposeMail.css";
import { Editor } from "react-draft-wysiwyg";
import { ToastContainer, toast } from "react-toastify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { RxCross1 } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";

import "./ComposeMail.css";

const ComposeMail = (props) => {
  const reciver = useRef();
  const subject = useRef();
  const editor = useRef();
  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });
  const [vis, setVis] = useState(false);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    if (editorState) {
      setVis(true);
    }
  };
  const mailHandler = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const plainText = rawContentState.blocks
      .map((block) => block.text.trim())
      .filter(Boolean)
      .join("\n");
    let sender = localStorage.getItem("email");
    let mail = {
      name: "Bhuvanesh hj",
      sender,
      reciver: reciver.current.value,
      subject: subject.current.value,
      mail: plainText,
      read: false,
      starred: false,
      time: props.time,
      send: true,
      receive: false,
    };
    fetch(
      "https://react-http-91704-default-rtdb.firebaseio.com/mailClient.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mail),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle success if needed
        console.log("Mail stored in Firebase:", data);
        //   dispatch(mailAction.addMail(mail));
        //  setTimeout(()=>{ props.composeHandler(false);},1000);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error storing mail in Firebase:", error);
        //   setTimeout(()=>{ props.composeHandler(false);},1000);
      });
    setEditorState("");
  };
  return (
    <div className="composer-backdrop">
      <div className="main-composer">
        <div className="d-flex align-items-center justify-content-between w-100 ps-3 pe-3 pt-2 curs-pointer rad text-white">
          <h6>New Message</h6>
          <div className="close-composer">
            <span
              onClick={() => {
                props.onClick(false);
              }}
            >
              <RxCross1 />
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between w-100  ps-3 pe-3 pt-2 pb-2  font-weight border-bottom">
          <span>To</span>
          <input
            type="email"
            name="email"
            id="email"
            className="w90"
            ref={reciver}
          />
          <span className="d-flex flex-row">
            <a href="#cc" className="ms-2">
              CC
            </a>{" "}
            <a href="#BCC" className="ms-2">
              BCC
            </a>
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100  ps-3 pe-3 pt-2 pb-2  font-weight border-bottom">
          <input
            type="text"
            name="subject"
            id="subject"
            className="w90"
            placeholder="Subject"
            ref={subject}
          />
        </div>
        <div className="editor-container">
          <Editor
            editorState={editorState}
            ref={editor}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        {vis && (
          <button className="send" onClick={mailHandler}>
            Send
            <IoMdSend />
          </button>
        )}
      </div>
    </div>
  );
};

export default ComposeMail;
