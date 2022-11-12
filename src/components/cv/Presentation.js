import React from "react";
import gmail from "../../images/icone-gmail.png";
import github from "../../images/icone-github.png";
import linkedin from "../../images/icone-linkedin.png";

const Presentation = () => {
  return (
    <div className="presentation">
      <img className="photo" src="" alt="profil" />
      <h2>Alexis Bertin</h2>
      <div>18 ans Permis B</div>
      <div>Etudiant en BTS SIO option SLAM au Lycée Bonaparte Toulon</div>
      <div className="hobbies">
      <h3>Centre d'intérêts :</h3>
      <ul>
        <li className="hobby">
          <span>Jeux vidéos</span>
        </li>
        <li className="hobby">
          <span>Sport</span>
        </li>
        <li className="hobby">
          <span>Cinéma</span>
        </li>
      </ul>
      </div>
      
      <h3>Contact :</h3>
      <div className="contact">
        <div className="mail">
            <a href="mailto:alex.bertin03@gmail.com" title="Lien pour m'envoyer un mail">
                <img src={gmail} alt="Icone de Mail"/>
            </a>
        </div>
        <div className="linkedin">
            <a href="https://fr.linkedin.com" title="Lien vers mon profil LinkedIn">
                <img src={linkedin} alt="Icone de LinkedIn"/>
            </a>
        </div>
        <div className="github">
            <a href="https://github.com/Alexoos" title="Lien vers mon profil Github">
                <img src={github} alt="Icone de GitHub"/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
