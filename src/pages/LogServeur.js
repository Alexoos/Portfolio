import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderLogServeur from'../components/projects/SliderLogServeur';

const LogServeur = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='logserveur'>
                    <h1 className='titre_logserveur'>LogServeur</h1>
                    <SliderLogServeur/>
                    <div>
                    Powershell/Windev
                    </div>
                    <p className='paragrapheLogServeur'>
                       LogServeur.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default LogServeur;