import React from "react";
import { useTranslation } from "react-i18next";

import "./CustomMessage.css";
import SectionTitle from "./SectionTitle";

export default function CustomMessage({ customMessageHandler }) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <SectionTitle>{t("custom_message_title")}</SectionTitle>
      <div className="custom-message">
        <label htmlFor="custom-message" className="form-label">
          {t("message_label")}
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
