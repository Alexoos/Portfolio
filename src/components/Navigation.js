import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navigation">
        <ul className="menuliste">
          <li>
            <NavLink className={(navData) => (navData.isActive ? "navActive" : "")} to="/">
              <i></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? "navActive" : "")} to="/cv">
              <i></i>
              <span>CV</span>
            </NavLink>
          </li>  
          <li>
            <NavLink className={(navData) => (navData.isActive ? "navActive" : "none")}to="/realisations">
              <i></i>
              <span>Réalisations</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
