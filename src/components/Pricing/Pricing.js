import React from "react";

import SectionTitle from "../UI/SectionTitle";
import PricingCard from "../UI/PricingCard";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <SectionTitle>our prices</SectionTitle>
            <div className="center">
              <PricingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
