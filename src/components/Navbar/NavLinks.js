import React from "react";

import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/card">
          about us
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/card">
          create card
        </NavLink>
      </li>
    </ul>
  );
}
