import React from "react";
import LogoAggloMistral from '../../images/Logo-AggloMistral.png';
import LogoPortfolio from '../../images/Logo-Portfolio.PNG';
import LogoSDC from '../../images/Logo-sdc.png';



const Container = () => {
    return (
        <div className="realisation">
            <div className="grid-container">
                <div className="container_img">
                    <a href="/Realisations/agglomistral">
                        <img className="image_realisation" src={LogoAggloMistral} alt="Logo d'AggloMistral"></img>
                    </a>
                </div>       
                <div className="container_img">
                    <a href="/Realisations/sdc">
                        <img className="image_realisation" src={LogoSDC} alt="Logo de SDC"></img> 
                    </a>
                </div>              
                <div className="container_img">
                    <a href="/Realisations/portfolio">
                        <img className="image_realisation" src={LogoPortfolio} alt="Logo de Portfolio"></img>
                    </a>
                </div>                     
            </div>       
        </div>
     );
  };
  
  export default Container;
  