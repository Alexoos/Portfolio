import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4v1sim5', 'template_pf5s0zm', form.current, 'Mc0G3P6Z1Mu8H6rAB')
        .then((result) => {
            alert("Message Envoyée !");
            document.location.href="/Accueil";  
        }, (error) => {
            alert("Erreur: Impossible d'envoyer le message !"); 
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" class="feedback-input" placeholder="Nom & Prénom" />
        <input type="email" name="user_email" class="feedback-input" placeholder="Email" />
        <textarea name="message" class="feedback-input" placeholder="Message" />
        <input type="submit" value="Envoyer"/>
      </form>
    );
  };
  
export default Form;




