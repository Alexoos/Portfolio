
import React from 'react';
import gmail from '../../images/icone-gmail.png';
import linkedin from '../../images/icone-linkedin.png';
import github from '../../images/icone-github.png';

const Lien = () => {
    return (
        <div>
                <div className="lien">

                    <a href="mailto:alex.bertin03@gmail.com" title="Lien pour m'envoyer un mail">

                        <img className ='mail' src={gmail} alt="Icone de Mail"/>

                    </a>

                    <a href="https://fr.linkedin.com" title="Lien vers mon profil LinkedIn">

                        <img  className="linkedin" src={linkedin} alt="Icone de LinkedIn"/>

                    </a>

                    <a href="https://github.com/Alexoos" title="Lien vers mon profil Github">

                        <img className="github" src={github} alt="Icone de GitHub"/>

                    </a>

                </div>
            </div>
    );
};

export default Lien;

