import React from "react";
import { Link } from "react-router-dom";

import "./PricingCard.css";

export default function PricingCard() {
  return (
    <div className="pricing-card">
      <h5>Basic</h5>
      <p>The perfect way to get started and get used to our tool.</p>
      <h1>
        $1 <sub className="sub-amout">/ per card</sub>
      </h1>
      <div className="divider"></div>
      <button className="btn btn-light w-100 get-started-btn">
        <Link to="/card">Get Started</Link>
      </button>
    </div>
  );
}
