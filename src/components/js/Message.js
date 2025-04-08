import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  // display messages with line breaks
  const formattedText = message.text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div
      className={`chat-bubble-wrapper ${
        message.uid === user.uid ? "right" : ""
      }`}
    >
      {message.uid !== user.uid ? (
        <img
          className="chat-bubble__left"
          src={message.avatar}
          alt="user avatar"
        />
      ) : (
        ""
      )}
      <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
        <div className="chat-bubble__right">
        {message.uid !== user.uid ? (
          <p className="user-name">{message.name}</p>
        ) : (
          ""
        )}
          <p className="user-message">{formattedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
