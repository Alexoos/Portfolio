import React from "react";
import logoJava from "../../images/Logo-Java.png";
import logoJs from "../../images/Logo-Javascript.png";
import logoPHP from "../../images/Logo-PHP.png";
import logoWindev from "../../images/Logo-Windev.png";
import logoGit from "../../images/Logo-Git.png";
import logoReactJS from "../../images/Logo-ReactJS.png";
import logoSymfony from "../../images/Logo-Symfony.png";
import logoNode from "../../images/Logo-Node.png";

const Competence = () => {
  return (
 
    <div>
      <h1>Compétences :</h1>
      <div className="competence">
        <div>
          <img className="logoCompetence" src={logoJava} alt="LogoJava"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoJs} alt="logoJs"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoPHP} alt="LogoPHP"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoWindev} alt="LogoWindev"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoGit} alt="LogoGit"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoReactJS} alt="logoReactJS"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoSymfony} alt="logoSymfony"></img>
        </div>
        <div>
            <img className="logoCompetence" src={logoNode} alt="logoNode"></img>
        </div>

        <div className="etoile"> 
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile"> 
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <div className="etoile">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>

      </div>
    </div>
  );
};

export default Competence;
