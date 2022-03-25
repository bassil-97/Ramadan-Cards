import React from "react";

import SectionTitle from "../UI/SectionTitle";
import PricingCard from "../UI/PricingCard";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing__wrapper">
      <div className="container">
        <SectionTitle>our prices</SectionTitle>
        <PricingCard />
      </div>
    </div>
  );
}
