import React from "react";
import Navigation from "../components/Navigation";
import Signature from "../components/Signature";
import Presentation from "../components/cv/Presentation";
import Formation from "../components/cv/Formation";
import Experience from "../components/cv/Experience";
import Competence from "../components/cv/Competence";

const Cv = () => {
  return (
    <div>
      <Navigation />
      <div className="center">
        <div className="cv">
          <Presentation />
          <div className="">
            <Formation />
            <Experience />
            <Competence />
          </div>
        </div>
      </div>
      <Signature />
    </div>
  );
};

export default Cv;
