import React from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    return (
        <div className="sub2_footer block_footer3">
        <form className="contact-form" action="" method="post">
        
        <label for="name">Nom et prénom</label>
        <input type="text" id="name" name="name" className="text-box" pattern="^[A-Za-z ,.'-]+$" minlength="4" maxlength="80" placeholder="..." required/>

        <label for="mail">Mail</label>
        <input type="email" id="mail" name="email" className="text-box" placeholder="...@..." required/>
       
        <label for="textarea">Votre message</label>
        <textarea name="message" id="textarea" rows="5" minlength="15" required></textarea>
        
        <input type="button" name="submit" className="btn-form" value="Envoyer"/>
        <div className="form-message"></div>
        </form>
    </div>
    );
};

export default ContactForm;