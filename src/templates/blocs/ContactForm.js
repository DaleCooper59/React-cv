import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let email = document.getElementById('email');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        
    }
    const sendEmail = (e) => {
        e.preventDefault();

        sendFeedback("template_ja6gi7h", {
            surname: surname,
            email: email,
            message: message,
        });
    };

    const sendFeedback = (templateId, variables) => {

        emailjs.send('default_service', templateId, variables, 'user_kbVlUbUtkBJlBAAp9cFRf')
            .then((result) => {
                console.log(result.status);
                alert('parfait, c\'est envoyé');
                setSurname("");
                setEmail("");
                setMessage("");
            }, (error) => {
                console.log(error.status);
                document.querySelector('.form-message').innerHTML =
                    "Une erreur s'est produite, veuillez réessayer.";
            });
    };


    return (
        <div className="sub2_footer block_footer3">
            <form className="contact-form" id='contact-form' onSubmit={sendEmail}>

                <label for="surname">Nom et prénom *</label>
                <input type="text" id="surname" name="surname" className="text-box" pattern="^[A-Za-z ,.'-]+$" minlength="4" maxlength="80"
                    autoComplete="off" onChange={(e) => setSurname(e.target.value)} value={surname} required />

                <label for="email">Mail *</label>
                <input type="email" id="email" name="email" className="text-box"
                    autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />

                <label for="textarea">Votre message *</label>
                <textarea name="message" id="textarea" rows="5" minlength="15"
                    autoComplete="off" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>

                <input type="submit" name="submit" className="btn-form" value="Envoyer" />
                <div className="form-message"></div>
            </form>
        </div>
    );
};

export default ContactForm;