import React from "react";
import { useTranslation } from "react-i18next";

import "./About.css";

//import AboutUsImg from "../../assets/ramadan_is_coming.webp";
import SectionTitle from "../UI/SectionTitle";
import Button from "../UI/Button";
import HowToUse from "./HowToUse";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about__us-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex align-items-start justify-content-center flex-column">
            <SectionTitle>{t("aboutUs_title")}</SectionTitle>
            <p>{t("aboutUs_text")}</p>
            <HowToUse />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_mkavw0sn.json"
              background="transparent"
              speed="1"
              style={{ width: "90%", height: "90%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="row mt-5">
          <div className="center">
            <Button>
              <Link to="/card">{t("create_card_text")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
