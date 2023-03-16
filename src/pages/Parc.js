import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderParc from'../components/projects/SliderParc';

const Parc = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='parc'>
                    <h1 className='titre_parc'>Parc Informatique</h1>
                    <SliderParc/>
                    <p className='paragrapheParc'>
                       Refonte du parc informatique (Avant: image 1 et 2, Apres: image 3 et 4), ce parc informatique permet de stocker toutes informations nécessaires pour la maintenance informatique d'une entreprise.
                       La refonte a étais faite en PHP/Bootstrap. 
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default Parc;