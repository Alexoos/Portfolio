import React from 'react';

import Navigation from '../components/Navigation';

import Signature from '../components/Signature';

import Lien from '../components/contact/Lien';



const Contact = () => {

    return (

        <div>

            <Navigation/>
            <div className='page'>
                <div className='contact'>
                <h1 className='titre_contact'>Contact </h1>
                    <form>      
                        <input name="name" type="text" class="feedback-input" placeholder="Nom & Prénom" />   
                        <input name="email" type="text" class="feedback-input" placeholder="Email" />
                        <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
                        <input type="submit" value="Envoyer"/>
                    </form>
                    <Lien/>
                </div>
            </div>
            <Signature/>

        </div>

    );

};



export default Contact;