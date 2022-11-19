import React from 'react';



const Formation = () => {

    return (

        <div className="formation">

            <h1>Formation :</h1>
            <ul className='parcours'>
                <li className="bonaparte">
                    <div className="date">
                        <span className='anne'>2021-2023  (en cours)</span>
                        <span>Lycée Bonaparte Toulon</span>
                        <span>BTS SIO option SLAM en Alternance</span>
                    </div>
                    <div className='details'>
                        <span>Brevet de Technicien Supérieur Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers</span>
                    </div>
                </li>
                <li className="rouviere">
                    <div className="date">
                        <span className='anne'>2020-2021</span>
                        <span>Terminale STI2D option SIN</span>
                        <span>Lycée Polyvalent Rouviere Toulon</span>
                    </div>
                    <div className='details'>
                        <span>Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable option Systèmes d’Information et Numérique mention bien</span>
                    </div>
                </li>
                <li className="eucalyptus">
                    <div className="date">
                        <span className='anne'>2018</span>
                        <span>Collège Les Eucalyptus Ollioules</span>
                    </div>
                    <div className='details'>
                        <span>Diplôme National du Brevet mention bien</span>
                    </div>
                </li>
            </ul>
        </div>
    );

};



export default Formation;