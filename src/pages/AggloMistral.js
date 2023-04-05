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
                    <div>
                    Java/JavaUX
                    </div>
                    <p className='paragrapheAggloMistral'>
                       AggloMistral est une application de suivi et de gestion d'un réseau de transport en commun.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );
};

export default AggloMistral;