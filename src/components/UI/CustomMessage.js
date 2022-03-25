import React from "react";

import "./CustomMessage.css";
import SectionTitle from "./SectionTitle";

export default function CustomMessage({ customMessageHandler }) {
  return (
    <React.Fragment>
      <SectionTitle>or enter your message</SectionTitle>
      <div className="custom-message">
        <label htmlFor="custom-message" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="custom-message"
          rows="4"
          onChange={(e) => customMessageHandler(e.target.value)}
        ></textarea>
      </div>
    </React.Fragment>
  );
}
