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
                    <div>
                    PHP/Bootstrap
                    </div>
                    <p className='paragrapheParc'>
                       Refonte du parc informatique.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default Parc;