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
                        SDC.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default SDC;