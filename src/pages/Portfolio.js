import React from 'react';
import Navigation from '../components/Navigation';
import Signature from '../components/Signature';
import SliderPortfolio from'../components/projects/SliderPortfolio';

const Portfolio = () => {
    
    return (
        <div>
            <Navigation/>
                <div className='portfolio'>
                    <h1 className='titre_portfolio'>Portfolio</h1>
                    <SliderPortfolio/>
                    <p className='paragraphePortfolio'>
                        Ce portfolio a était réalisé en ReactJS/SCSS (en cours de développement)
                    </p>
                </div>
            <Signature/>
        </div>
        );

    };

export default Portfolio;