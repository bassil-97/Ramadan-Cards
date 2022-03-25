import React from "react";

import "./MessagesContainer.css";
import MessageCard from "../UI/MessageCard";
import SectionTitle from "../UI/SectionTitle";

import messages from "../../assets/data/messages.json";

export default function MessagesContainer({ setSelectedMessage }) {
  const selectMessageHandler = (msgId) => {
    let message = messages.filter(function (el) {
      return el.id === msgId;
    });

    setSelectedMessage(message[0].text);
  };

  return (
    <React.Fragment>
      <SectionTitle>Select Message</SectionTitle>
      <div className="messages-container">
        {messages &&
          messages.map((msg) => (
            <MessageCard
              selectMessage={selectMessageHandler}
              key={msg.id}
              id={msg.id}
              text={msg.text}
            />
          ))}
      </div>
    </React.Fragment>
  );
}
