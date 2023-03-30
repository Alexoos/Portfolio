import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderMDL from'../components/projects/SliderMDL';

const MDL = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='mdl'>
                    <h1 className='titre_mdl'>Maison Des Ligues</h1>
                    <SliderMDL/>
                    <p className='paragrapheMDL'>
                        Maison des ligues (MDL) est une application de gestion des inscriptions aux congrés d'escrime, réalisée en  Symphony/SCSS (en cours de développement).
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default MDL;