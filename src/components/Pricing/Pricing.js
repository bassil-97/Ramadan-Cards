import React from "react";
import { useTranslation } from "react-i18next";

import SectionTitle from "../UI/SectionTitle";
import PricingCard from "../UI/PricingCard";
import "./Pricing.css";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="pricing__wrapper">
      <div className="container">
        <SectionTitle>{t("prices_title")}</SectionTitle>
        <PricingCard />
      </div>
    </div>
  );
}
