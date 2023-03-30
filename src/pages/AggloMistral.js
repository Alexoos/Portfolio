import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderAggloMistral from'../components/projects/SliderAggloMistral';


const AggloMistral = () => {
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='agglomistral'>
                    <h1 className='titre_agglomistral'>AggloMistral</h1>
                    <SliderAggloMistral/>
                    <p className='paragrapheAggloMistral'>
                       AggloMistral est une application (Java/JavaUX) de gestion et de consultation de transport en commun inspirée du réseau Mistral.Elle permet de consulter les horaires de bus sur des lignes, des stations mais aussi de trouver un itinéraire en fonction de la station de départ et d'arrivée.Il est possible aussi de se connecter sur l'application avec un compte administrateur pour pouvoir effectuer des modifications de ligne, de station, d'itinéraire et de bus. 
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );
};

export default AggloMistral;