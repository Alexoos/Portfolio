import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderGSB from'../components/projects/SliderGSB';

const GSB = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='gsb'>
                    <h1 className='titre_gsb'>Galaxy Swiss Bourdin</h1>
                    <SliderGSB/>
                    <p className='paragrapheGSB'>
                        gsb.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default GSB;