import React from "react";

import Navigation from "../components/Navigation";

import Signature from "../components/Signature";

import Presentation from "../components/cv/Presentation";

import Formation from "../components/cv/Formation";

import Experience from "../components/cv/Experience";

import Competence from "../components/cv/Competence";

import LogoDL from "../images/Logo-Download.png";


const Cv = () => {

  return (

    <div>

      <Navigation />
        <div className="page">
          <div className="cv">
            <div className="title_page">CURRICULUM VITAE</div>
              <Presentation />

                <Formation />

                <Experience />

                <Competence />
                <div className = "logoDl">
                  <a href="CV de Alexis Bertin.pdf" download="CV_Alexis_Bertin.pdf">
                    <img src={LogoDL}></img>
                  </a>
              </div>
            </div>
        </div>
      <Signature />

    </div>

  );



};



export default Cv;

