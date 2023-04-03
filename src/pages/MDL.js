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
                    <div>
                    Symphony/Twig/SCSS
                    </div>
                    <p className='paragrapheMDL'>
                       MDL
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default MDL;