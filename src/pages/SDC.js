import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderSDC from'../components/projects/SliderSDC';

const SDC = () => {
    
    return (
        <div>
            <Navigation/>
                <div className='sdc'>
                    <h1 className='titre_sdc'>SDC Mobile</h1>
                    <SliderSDC/>
                    <p className='paragrapheSDC'>
                        SDC (Suivi de chantier) Mobile est une application web réalisée en PHP/BOOTSTRAP faite pour une utilisation mobile.Elle permet de gerer (ajouts de photos, de notes, création de bon de commandes) et suivre les chantiers qui sont affecter a l'employé de n'importe où, avec un affichage différent pour les chefs de chantier.
                    </p>
                </div>
            <Signature/>
        </div>
        );

    };

export default SDC;