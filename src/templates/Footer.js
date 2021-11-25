import React from 'react';

const Footer = () => {
    

    let date = new Date()

    return (
        <footer class='footer'>
            <div class="container1_footer">
                <div class="sub1_footer">
                    <h3>N'hésitez pas à me contacter!</h3>
                </div>
            </div>

            <div class="container2_footer">
                <div class="sub2_footer block_footer1">
                    <p class="icon_legend">Voici mes différents profils via les réseaux sociaux, à très bientôt.</p>
                    <ul class="social_footer list_footer">
                        <li><a href="https://github.com/DaleCooper59" id="github">Github</a></li>
                        <li> <a href="https://discord.com"  id="discord" >Discord</a> </li>
                        <li> <a href="https://www.linkedin.com/in/christopher-duvinage-8a38091a6/" id="linkedin">Linkedin</a> </li>
                        <li> <a href="https://twitter.com/DuvinageChrist1"  id="twitter">Twitter</a> </li>
                        <li> <a href="https://www.facebook.com/christopher.duvinage/"  id="facebook">Facebook</a> </li>
                    </ul>
                </div>

                <div class="sub2_footer block_footer2">
                <h5 class="title_block">Menu</h5>
                <ul class="list_footer2">
                    <li><a href="#Présentation">présentations</a></li>
                    <li><a href="#competences">compétences</a></li>
                    <li><a href="#experiences">expériences</a></li>
                    <li><a href="#Contact">contacts</a></li>
                </ul>
                </div>

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
            </div>


            {/*Copyrights */}
           <div class="copyrights">
               <span class="copyR">{date.getFullYear()} &copy; DaleCooper59 Tous droits réservés</span>
           </div>
        </footer>
    );
};

export default Footer;