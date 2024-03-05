import React from "react";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const { t } = useTranslation();

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          {t("navbar_home")}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/card">
          {t("create_card_text")}
        </NavLink>
      </li>
    </ul>
  );
}
