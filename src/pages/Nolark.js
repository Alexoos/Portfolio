import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderNolark from'../components/projects/SliderNolark';

const Nolark = () => {
    
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='nolark'>
                    <h1 className='titre_nolark'>Nolark</h1>
                    <SliderNolark/>
                    <div>
                    PHP/HTML/CSS
                    </div>
                    <p className='paragrapheNolark'>
                       Nolark.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default Nolark;