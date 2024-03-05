import React from "react";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./Navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeAppLanguage = () => {
    let currentLanguage = i18n.language;

    if (currentLanguage === "en") {
      i18n.changeLanguage("ar");
      document.body.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      document.body.dir = "ltr";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Ramadan Cards
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {<NavLinks />}
        </div>
        <button className="btn" onClick={changeAppLanguage}>
          {i18n.language === "en" ? "Arabic" : "English"}
        </button>
      </div>
    </nav>
  );
}
