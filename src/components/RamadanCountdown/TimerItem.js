import React from "react";

export default function TimerItem({ time, title }) {
  console.log(typeof time.toString());

  return (
    <div className="center flex-column">
      <div className="timer-item">
        <h2>{time}</h2>
      </div>
      <h6 className="text-capitalize">{title}</h6>
    </div>
  );
}
