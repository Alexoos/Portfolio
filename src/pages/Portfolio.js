import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderPortfolio from'../components/projects/SliderPortfolio';

const Portfolio = () => {
    return (
        <div>
            <Navigation/>
            <div className='page'>
                <div className='portfolio'>
                    <h1 className='titre_portfolio'>Portfolio</h1>
                    <SliderPortfolio/>
                    <div>
                    ReactJS/SCSS
                    </div>
                    <p className='paragraphePortfolio'>
                        Portfolio d'Alexis Bertin.
                    </p>
                </div>
            </div>
            <Signature/>
        </div>
        );

    };

export default Portfolio;