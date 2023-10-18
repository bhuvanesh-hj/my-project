import React, { useEffect, useState } from "react";
import "./Home.css";
import { FcUpLeft } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import ComposeMail from "../ComposeMail/ComposeMail";
import { useSelector } from "react-redux";


const Home = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeListItem, setActiveListItem] = useState("Inbox");
  const [iscompose, setCompose] = useState(false);
  const [readmoode, setReadMode] = useState(false);
  const [readmoodeValue, setReadModeValue] = useState("");
  const currentDate = new Date();
  const sentMails = useSelector((state) => state.mail.sentMails);
  const allMails = useSelector((state) => state.mail.allMails);
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    setTemp(allMails);
  }, [allMails]);
  const composehandle = (value) => {
    setCompose(value);
  };
  // Function to format the time (hh:mm AM/PM)
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  // Function to format the date (yyyy-mm-dd)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date
      .getDate()
      .toString()
      .padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  // Get the formatted time and date
  const formattedTime = formatTime(currentDate);
  const formattedDate = formatDate(currentDate);

  const handleItemClick = (item) => {
    setActiveListItem(item);
    setReadMode(false);
    switch (item) {
      case "Inbox":
        setTemp(allMails);
        break;
      case "Sent":
        setTemp(sentMails);
        break;
      default:
        setTemp([]);
    }
  };

 
  const readmodeHandler = () => {
    setReadMode(false);
  };
  const readModeActivehandler = (value) => {
    setReadMode(true);
    setReadModeValue(value);
    let temp = {value};
    if (value.sender !== localStorage.getItem("email")) {
      fetch(
        `https://react-http-91704-default-rtdb.firebaseio.com/mailClient.json/${value.mailId}.json`,
        {
          method: "PUT",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(temp),
        }
      )
        .then((response) => {
          if (!response) {
            throw new Error("Unable to update the data");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const deleteHandler = (value) => {
    fetch(
      `https://react-http-91704-default-rtdb.firebaseio.com/mailClient/${value.mailId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response) {
          throw new Error("Network error");
        } else {
          console.log("Deleted successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setReadMode(false);
    setTemp([]);
  };
  return (
    <div>
      <div className="container-fluid mail-main">
        <div className="row">
          <section className="menu-disp menu col-lg-2  col-md-12 p-3 rad">
            <button
              className="compose font-weight text-light"
              onClick={() => {
                composehandle(true);
              }}
            >
              Compose mail
            </button>
            <div class="inbox-list">
              <ul className="menu-list font-weight mt-1">
                <li
                  className={activeListItem === "Inbox" ? "list-active" : ""}
                  onClick={() => handleItemClick("Inbox")}
                >
                  Inbox{" "}
                  <span className="inbox-mail-count">{allMails.length}</span>
                </li>
                <li
                  className={activeListItem === "Sent" ? "list-active" : ""}
                  onClick={() => handleItemClick("Sent")}
                >
                  Sent{" "}
                  <span className="sent-mail-count">{sentMails.length}</span>
                </li>
              </ul>
            </div>
          </section>
          {!readmoode && (
            <section className="bg-light list col-lg-9 py-3 px-4 mx-5 col-md-12 rad">
              {/* Mail Listes   the main mail */}
              <div className="mail-lists">
                {temp.length === 0 ? (
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3> No {activeListItem} mail available</h3>
                  </div>
                ) : (
                  <ul>
                    {temp.map((value,i) => (
                      <li
                        className="font-weight d-flex align-items-center justify-content-between font-reducer"
                        onClick={() => {
                          readModeActivehandler(value);
                        }}
                      >
                        <span>{i+1}</span>
                        <span>{value.name}</span>
                        <span className="title-mail-list">{value.subject}</span>
                        <span className="description-mail-list">
                          {value.mail}
                        </span>
                        <span className="mail-time">
                          <span>{value.time}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          )}
          {readmoode && (
            <section className="bg-light list col-lg-9 col-md-12 mx-5 py-3 px-3">
              <div>
                <div className="mail-readmode-header">
                  <span onClick={readmodeHandler} title="Back">
                    <FcUpLeft size="1.3rem" />
                  </span>
                  <span
                    onClick={() => {
                      deleteHandler(readmoodeValue);
                    }}
                    title="Delete"
                  >
                    <AiFillDelete size="1.3rem" />
                  </span>
                </div>
              </div>
              {/* Mail Listes   the main mail */}
              <div className="mail-readMod-container">
                <div className="mail-list-header d-flex align-items-center justify-content-between p-2 border-bottom">
                  <div className="mail-readmode-header">
                    <span title="Subject of mail">
                      Subject: {readmoodeValue.subject}
                    </span>
                  </div>
                </div>
                <div className="mail-list-header p-3 font-weight d-flex flex-row justify-content-start">
                  <span className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="ms-2">{readmoodeValue.name}</span>
                      <span> {readmoodeValue.time} </span>
                    </div>
                    <span className=" ms-2">to me</span>
                  </span>
                </div>
                <div className="message-container">{readmoodeValue.mail}</div>
              </div>
            </section>
          )}
        </div>
      </div>
      {iscompose && (
        <ComposeMail
          onClick={composehandle}
          composeHandler={setCompose}
          time={formattedDate + " " + formattedTime}
        />
      )}
    </div>
  );
};

export default Home;
