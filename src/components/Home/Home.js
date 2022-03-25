import React from "react";

import "./Home.css";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";

import Logo from "../../assets/arbfonts-islamic-arabic-calligraphy46-2.png";
import Coffie from "../../assets/coffee.png";

export default function Home() {
  return (
    <React.Fragment>
      <div className="home__wrapper">
        <img
          src={Logo}
          width="20%"
          height="20%"
          className="img-responsive img-logo"
          alt="img-Kareem"
        />
        {/*<h1 className="home__title">Ramadan Kareem</h1>*/}
        <p className="home__text">
          Happy fasting to all Muslim fellow around the world. May this Ramadan
          bring endlessly moments of joy and we are always in the protection of
          ALLAH.
        </p>
        <div className="home__image-wrapper center">
          <img src={Coffie} alt="Ramadan Kareem"></img>
        </div>
      </div>
      <About />
      <Pricing />
    </React.Fragment>
  );
}
