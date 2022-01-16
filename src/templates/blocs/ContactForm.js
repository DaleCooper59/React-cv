import React from 'react';

const ContactForm = () => {
    return (
        <div class="sub2_footer block_footer3">
        <form class="contact-form" action="" method="post">
        <h5>En construction ...</h5>
        <label for="name">Nom et prénom</label>
        <input type="text" id="name" name="name" class="text-box" pattern="^[A-Za-z ,.'-]+$" minlength="4" maxlength="80" placeholder="Votre nom et prénom" required/>

        <label for="mail">Mail</label>
        <input type="email" id="mail" name="email" class="text-box" placeholder="Votre Email" required/>
       
        <label for="textarea">Message</label>
        <textarea name="message" id="textarea" rows="5" minlength="15" placeholder="Votre message" required></textarea>

        <input type="submit" name="submit" class="btn-form" value="Envoyer"/>
        </form>
    </div>
    );
};

export default ContactForm;