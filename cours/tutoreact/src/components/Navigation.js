import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink
          to="/Starwars"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Starwars</li>
        </NavLink>
        <NavLink
          to="/Films"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Films</li>
        </NavLink>
        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
