import React from "react";
import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
        <div className="titre">
          <div className="moi">Alexis Bertin</div>
        <div className="developpeur">
            Développeur
            <div className="typeScript"></div>  
            <TypeAnimation
            sequence={[
              "Java", 
              1000,
              "Javascript",
              1000,
              "Php",
              1000,
            ]}
            repeat={Infinity}
            style={{fontWeight: '900'}}
          />     
        </div>
      </div>
   
  );
};

export default Title;
