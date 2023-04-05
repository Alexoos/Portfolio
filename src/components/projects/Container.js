import React from "react";
import { useNavigate } from 'react-router-dom';
import logoJava from "../../images/Logo-Java.png";
import logoPHP from "../../images/Logo-PHP.png";
import logoReactJS from "../../images/Logo-ReactJS.png";
import logoSymfony from "../../images/Logo-Symfony.png";
import logoWindev from "../../images/Logo-Windev.png";

const Container = () => {
    const navigate = useNavigate();
    const AggloMistral = () => navigate('/Agglomistral');
    const Sdc = () => navigate('/Sdc');
    const Portfolio = () => navigate('/Portfolio');
    const Parc = () =>navigate('/Parc');
    const GSB = () =>navigate('/Gsb');
    const MDL = () =>navigate('/Mdl');  
    const Nolark = () =>navigate('/Nolark');
    const LogServeur = () =>navigate('/LogServeur');
    
    return (
        <div className="realisation">
            <div className="grid-container">
                <div className="container_img" onClick={Nolark}>           
                    <a>
                        <img className="image_realisation" src={logoPHP} alt="Logo de Parc"></img>
                    </a>
                    <div className="libelleProjet">
                        Nolark
                    </div>
                </div>
                <div className="container_img" onClick={AggloMistral}>
                    <a>
                        <img className="image_realisation" src={logoJava} alt="Logo d'AggloMistral"></img>
                    </a>
                    <div className="libelleProjet">
                        AggloMistral
                    </div>
                </div>       
                            
                <div className="container_img" onClick={Portfolio}>
                    <a>
                        <img className="image_realisation" src={logoReactJS} alt="Logo de Portfolio"></img>
                    </a>
                    <div className="libelleProjet">
                        Portfolio
                    </div>
                </div>
                
                <div className="container_img" onClick={Parc}>
                    <a>
                        <img className="image_realisation" src={logoPHP} alt="Logo de Parc"></img>
                    </a>
                    <div className="libelleProjet">
                        Parc Informatique
                    </div> 
                </div>         
                <div className="container_img" onClick={GSB}>
                    <a>
                        <img className="image_realisation" src={logoPHP} alt="Logo de GSB"></img>
                    </a>
                    <div className="libelleProjet">
                        GSB
                    </div> 
                </div> 
                <div className="container_img" onClick={MDL}>
                    <a>
                        <img className="image_realisation" src={logoSymfony}  alt="Logo de MDL"></img>
                    </a>
                    <div className="libelleProjet">
                        MDL
                    </div> 
                </div>
                <div className="container_img" onClick={LogServeur}>
                    <a>
                        <img className="image_realisation" src={logoWindev} alt="Logo de Parc"></img>
                    </a>
                    <div className="libelleProjet">
                        LogServeur
                    </div> 
                </div>
                <div className="container_img" onClick={Sdc}>
                    <a>
                        <img className="image_realisation" src={logoPHP} alt="Logo de SDC"></img> 
                    </a>
                    <div className="libelleProjet">
                        SDC
                    </div>
                </div>                        
            </div>       
        </div>
     );
  };
  
  export default Container;
  