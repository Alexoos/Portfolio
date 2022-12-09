import React from "react";

import { NavLink } from "react-router-dom";



const Navigation = () => {

  return (

    <div className="navbar">

      <div className="navigation">

        <ul className="menuliste">

          <li>

            <NavLink className={(navData) => (navData.isActive ? "navActive" : "")} to="/Accueil">     

              <span>Accueil</span>

            </NavLink>

          </li>

          <li>

            <NavLink className={(navData) => (navData.isActive ? "navActive" : "")} to="/CV">

              <span>CV</span>

            </NavLink>

          </li>  

          <li>

            <NavLink className={(navData) => (navData.isActive ? "navActive" : "none")}to="/Realisations">

              <span>Réalisations</span>

            </NavLink>

          </li>

          <li>

            <NavLink className={(navData) => (navData.isActive ? "navActive" : "none")}to="/Contact">

              <span>Contact</span>

            </NavLink>

          </li>

        </ul>

      </div>

    </div>

  );

};



export default Navigation;

