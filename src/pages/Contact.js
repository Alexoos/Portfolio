import React from 'react';

import Navigation from '../components/Navigation';

import Signature from '../components/Signature';

import Form from '../components/contact/FormContact';

import Lien from '../components/contact/Lien';



const Contact = () => {

    return (

        <div>

            <Navigation/>
            <div className='page'>
                <div className='contact'>
                <h1 className='titre_contact'>Contact </h1>
                    <Form/>
                    <Lien/>
                </div>
            </div>
            <Signature/>

        </div>

    );

};



export default Contact;