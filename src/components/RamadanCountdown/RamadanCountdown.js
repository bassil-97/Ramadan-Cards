import React from "react";

import TimerItem from "./TimerItem";
import { useCountdown } from "../hooks/countdown-hook";
import "./RamadanCountdown.css";

export default function RamadanCountdown() {
  const [days, hours, minutes, seconds] = useCountdown("Apr 4, 2022 00:00:00");

  return (
    <div className="ramadan-countdown__wrapper">
      <div className="container text-center">
        {/* <div className="center mb-4">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_0vex2ejz.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></lottie-player>
        </div> */}
        <h1 className="time-left__title">Time left until ramadan</h1>
        <div className="timer__wrapper">
          <TimerItem time={days} title={"days"} />
          <TimerItem time={hours} title={"hours"} />
          <TimerItem time={minutes} title={"minutes"} />
          <TimerItem time={seconds} title={"seconds"} />
        </div>
      </div>
    </div>
  );
}
