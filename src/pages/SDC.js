import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderSDC from'../components/projects/SliderSDC';

const SDC = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='sdc'>
                    <h1 className='titre_sdc'>SDC Mobile</h1>
                    <SliderSDC/>
                    <div>
                    PHP/Bootstrap
                    </div>
                    <p className='paragrapheSDC'>
                        SDC (Suivi de chantier) mobile est une application web de suivi de chantier accessible depuis n'importe où.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default SDC;