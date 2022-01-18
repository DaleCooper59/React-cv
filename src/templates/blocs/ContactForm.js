import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    let formMsg = document.querySelector('.form-message');

    const eraseMsg = (msg) => {
        msg.innerHTML = '';
        msg.style.opacity = '0';
    }

    const revealMsg = (msg, color = 'red') => {
        formMsg.style.opacity = '1';
        formMsg.style.color = color;
        formMsg.innerHTML = msg;
        setTimeout(() => {
            eraseMsg(formMsg);
        }, 4000);
    }


    const isEmail = () => {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email.match(regex);
    }

    
    const sendEmail = (e) => {
        e.preventDefault();

        if (surname && isEmail()) {
            if (message.length < 15) {
                return revealMsg("Votre message est beaucoup trop court, il faut au moins 15 caractères");
            } else {
                sendFeedback("template_ja6gi7h", {
                    surname: surname,
                    email: email,
                    message: message,
                });
            }
        } else {
            console.log('error');
            revealMsg("Une erreur concernant votre adresse mail est survenue");

        }

    };

    const sendFeedback = (templateId, variables) => {

        emailjs.send('default_service', templateId, variables, 'user_kbVlUbUtkBJlBAAp9cFRf')
            .then((result) => {
                console.log(result.status);
                revealMsg(`Je vous recontacte dès que possible, merci à vous ${surname} et Bonne journée`, '#00b4d8')

                setSurname("");
                setEmail("");
                setMessage("");
            }, (error) => {
                console.log(error.status);
                revealMsg("Une erreur s'est produite, veuillez réessayer.");

            });
    };


    return (
        <div className="sub2_footer block_footer3">
            <form className="contact-form" id='contact-form' onSubmit={sendEmail}>

                <label for="surname">Nom et prénom *</label>
                <input type="text" id="surname" name="surname" className="text-box" pattern="^[A-Za-z ,.'-]+$" minLength={"4"} maxLength={"80"}
                    autoComplete="off" onChange={(e) => setSurname(e.target.value)} value={surname} required />


                <label for="email" >Mail *</label>
                <input type="email" id="email" name="email" className="text-box"
                    autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />


                <label for="textarea">Votre message *</label>
                <textarea name="message" id="textarea" rows="5"
                    autoComplete="off" onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>

                <input type="submit" name="submit" className="btn-form" value="Envoyer" />
                <div className="form-message"></div>
            </form>
        </div>
    );
};

export default ContactForm;