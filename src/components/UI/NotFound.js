import React from "react";

import { useNavigate } from "react-router-dom";
import "./404.css";

export default function NotFound() {
  const history = useNavigate();

  return (
    <div className="not-found__wrapper">
      <div className="container">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_mkcnkz8c.json"
          background="transparent"
          speed="1"
          style={{ width: "350px", height: "550px" }}
          loop
          autoplay
        ></lottie-player>
        <button
          onClick={() => history("/home")}
          className="btn btn-outline-secondary"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
