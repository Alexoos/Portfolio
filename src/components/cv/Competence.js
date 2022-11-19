import React from 'react';
import logoJava from '../../images/Logo-Java.png';
import logoJs from '../../images/Logo-Javascript.png';
import logoPHP from '../../images/Logo-PHP.png';
import logoWindev from '../../images/Logo-Windev.png';
import logoGit from '../../images/Logo-Git.png';


const Competence = () => {

    return (
        <div>
            <h1>Compétence :</h1>
            <div className="competence">
                <img className='logoCompetence' src={logoJava} alt="LogoJava"></img>
                <img className='logoCompetence' src={logoJs} alt="LogoJs"></img>
                <img className='logoCompetence' src={logoPHP}  alt="LogoPHP"></img>
                <img className='logoCompetence' src={logoWindev}  alt="LogoWindev"></img>
                <img className='logoCompetence' src={logoGit}  alt="LogoGit"></img>
            </div>
        </div>
    );

};



export default Competence;