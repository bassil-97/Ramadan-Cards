import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./PricingCard.css";

export default function PricingCard() {
  const { t } = useTranslation();

  return (
    <div className="pricing-card">
      <h5>{t("prices_card_title")}</h5>
      <p>{t("prices_card_text")}</p>
      <h1>
        $0 <sub className="sub-amout">/ {t("prices_card_subtext")}</sub>
      </h1>
      <div className="divider"></div>
      <button className="btn btn-light w-100 get-started-btn">
        <Link to="/card">{t("prices_card_btn")}</Link>
      </button>
    </div>
  );
}
