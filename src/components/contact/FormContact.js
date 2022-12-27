import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
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




