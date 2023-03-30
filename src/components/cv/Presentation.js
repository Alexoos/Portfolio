import React from "react";
import PhotoProfil from "../../images/Photo.PNG";
const Presentation = () => {

  return (

    <div className="presentation">
       <div className="pres">
        <img className="photo" src={PhotoProfil} alt="profil" />
        <p className="paragraphe"><span className="nom">Alexis Bertin</span>, 19 ans, passionné d'informatique et plus particulièrement de programmation, actuellement au BTS Services Informatiques aux Organisations en alternance à Toulon.
        </p>
      </div>
    </div>

  );

};



export default Presentation;

