import React from "react";
import { useTranslation } from "react-i18next";

import "./Home.css";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";

import Logo from "../../assets/arbfonts-islamic-arabic-calligraphy46-2.png";
import Coffie from "../../assets/coffee.png";

export default function Home() {
  const { t } = useTranslation();

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
        <p className="home__text">{t("home_main_text")}</p>
        <div className="home__image-wrapper center">
          <img src={Coffie} alt="Ramadan Kareem"></img>
        </div>
      </div>
      <About />
      <Pricing />
    </React.Fragment>
  );
}
