import React from "react";

export default function SectionTitle(props) {
  return (
    <div className="section-title">
      <h2 className={props.white && "text-light"}>{props.children}</h2>
    </div>
  );
}
