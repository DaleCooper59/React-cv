import React from 'react';

const Contacts = () => {
    return (
       
        <section>  <h2 className='blocTitle'>Contacts</h2>
        {/*<ul className="menu menu4">
            <li> <a href={url}>Présentation</a> </li>
            <li> <a href={url}>Compétences</a></li>
            <li> <a href={url}>Expériences</a></li>
            <li className='id_li1' id="four"> <a href="#Présentation">Contact</a></li>
        </ul>*/}
        <div id="contact">
      
            <ul id="ul-contact">
                <li>DUVINAGE CHRISTOPHER</li>
                <li>06 16 95 16 88</li>
                <li id="mail-contact">duvinagechristopher1@gmail.com</li>
                <li>https://duvinagechristopher-cv.com/</li>
                <li> <h2>Venez également voir mon profil sur<a href="https://www.codewars.com/users/DaleCooper59"> CODEWARS .</a></h2></li>
            </ul>
        </div>
    </section>
    );
};

export default Contacts;