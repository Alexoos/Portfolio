import React from "react";
import LogoAggloMistral from '../../images/Logo-AggloMistral.png';
import LogoPortfolio from '../../images/Logo-Portfolio.PNG';
import LogoSDC from '../../images/Logo-sdc.png';



const Container = () => {
    return (
        <div className="realisation">
            <div className="grid-container">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img className="image_realisation" src={LogoAggloMistral} alt="Logo d'AggloMistral"></img>
                        </div>
                        <div class="flip-card-back">
                            <h1>AggloMistral</h1>
                            <div>Application de gestion et de consultation de transport en commun inspirée du réseau Mistral</div>
                            <div className="prog">Java/JavaFX</div>
                            <a href="/Realisations/agglomistral">En savoir plus</a>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className="image_realisation" src={LogoSDC} alt="Logo de SDC"></img>
                        </div>
                        <div class="flip-card-back">
                            <h1>SDC Mobile</h1>
                            <div>Application de gestion et de suivi de chantier pour mobile</div>
                            <div className="prog">PHP/Bootstrap</div>
                            <a href="/Realisations/sdc">En savoir plus</a>
                        </div>
                    </div>    
                </div>
                
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img className="image_realisation" src={LogoPortfolio} alt="Logo de Portfolio"></img> 
                        </div>
                        <div class="flip-card-back">
                            <h1>Portfolio</h1>
                            <div>Portfolio d'Alexis Bertin</div>
                            <div className="prog">ReactJS/SCSS</div>
                            <a href="/Realisations/portfolio">En savoir plus</a>
                        </div>
                    </div>    
                </div>
            </div>   
        </div>
     );
  };
  
  export default Container;
  