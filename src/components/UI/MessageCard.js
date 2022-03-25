import React from "react";
import "./MessageCard.css";

export default function MessageCard({ id, text, selectMessage }) {
  return (
    <div className="message-card">
      <p>{text}</p>
      <button
        onClick={() => selectMessage(id)}
        className="btn btn-outline-secondary"
      >
        اختر هذه الرسالة
      </button>
    </div>
  );
}
