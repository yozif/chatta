import React, { useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import "../css/Chat.css";

const Chat = ({messages}) => {
  const scroll = useRef();

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default Chat;