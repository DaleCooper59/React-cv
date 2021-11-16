import React from 'react';

const Main = () => {
    let url='';
    return (
        <>
            <main>

            <div className="picture">
                <img id="profile_picture" src="./img/122336553_2739494626292799_6695223732738674342_n.jpg"
                    alt="DUVINAGE Christopher" />

            </div>

            <div id="big_section">
                <section>

                <div class="j" id="Présentation">
                    <p>Véritable passionné par le développement Web et les nouvelles technologies en général
                        depuis plusieurs années, ma curiosité m'amène a être en constante évolution.
                        Je suis DUVINAGE Christopher comme le suggère le <a href="#svg">"SVG"</a> plus haut et je suis
                        fier de pouvoir vous offrir mes
                        compétences.
                        M'étant formé en autodidacte, je cherche constamment à perfectionner mon travail.
                        Aujourd'hui après avoir effectué une formation de développement web et web mobile, j'ai consolidé mon souhait
                        de pouvoir
                        exercer professionellement le métier de développeur.

                        Je suis curieux et persévérant. J'aime beaucoup lire (notamment de la doc <i
                            class="fas fa-smile-wink"></i> ), apprendre est mon quotidien.
                        Le challenge pour moi est nécessaire pour progresser, il est un but dans ma façon de travailler.
                    </p>
                    <p>
                        Qui ne s'est jamais demandé comment fonctionne une page internet?
                        Que de mystères résolus en arpentant les nombresuses sources plus ou moins bien fournies sur le
                        net.
                        J'ai commencé par le language de structuration <b>HTML 5</b>.
                        Ensuite vint le style avec <b>CSS 3</b>. Tout de suite séduit j'ai voulu en savoir davantage.
                        J'ai découvert la programmation à travers l'algorythmie puis le<b>Javascript</b>, etc.

                        J'ai notemment aqcuis de nombreuses compétences, parmi les fameux Softskills.

                        Dans cette formation qui dure jusqu'au <strong>30 Octobre 2021</strong>, je consolide mes
                        connaissances et j'apprend de nouveaux languages.
                        La perspective de monter en compétences est une réelle satisfaction.

                        J'ai effectué un Stage à l'agence Akawam qui se situe à Villeneuve d'ascq du<strong> 26 Juillet</strong> au <strong> 22 Octobre 2021</strong>.
                        Ce stage m'a permis d'évoluer sur le plan technique notamment à travers l'apprentissage de l'utilisation d'un Framework (Laravel) et 
                        d'autres technologies.
                        J'ai pu à travers mes réalisations largement progressé sur la programmation orientée objet et le modèle MVC.
                        Ce stage m'a permis aussi de me mettre dans les conditions de travail en agance digitale avec les contraintes liées au délai et à la satisfaction du client.


                        Voici mes compétences <i class="fas fa-arrow-circle-down"></i>
                        </p>
                    </div>
                </section>

                <section>
                    <ul className="menu menu2">
                        <li> <a href={url}>Présentation</a> </li>
                        <li className='id_li1' id="two"> <a href="#experiences">Compétences</a> </li>
                        <li> <a href={url}>Expériences</a></li>
                        <li> <a href={url}>Contact</a></li>
                    </ul>
                    <div id="competences">
                        <div className="ele">
                            <img src="./img/icon/html-5.png" alt="icon html 5" className="img_competences" id="html-5" />
                            <img src="./img/icon/css-3.png" alt="icon css 3" className="img_competences" id="css-3" />
                            <img src="./img/icon/script-java.png" alt="icon Javascript" className="img_competences" id="Javascript" />
                            <img src="./img/icon/bootstrap.png" alt="icon Bootstrap" id="Bootstrap" />
                            <img src="./img/icon/tailwind.png" alt="icon tailwind" id="tailwind"/>
                            <img src="./img/icon/sass.png" alt="icon sass" class="img_competences" id="sass"/>
                            <img src="./img/icon/sql-server.png" alt="icon sql" class="img_competences" id="sql"/>
                            <img width="80" height="80" src="./img/icon/laragon.png" alt="icon laragon" class="img_competences" id="laragon"/>
                            <img width="80" height="80"  src="./img/icon/phpMyAdmin.png" alt="icon phpMyAdmin" class="img_competences" id="phpMyAdmin"/>
                            <img src="./img/icon/mcd.png" alt="icon mcd" class="img_competences" id="mcd"/>
                            <img width="80" height="80"  src="./img/icon/workbench.png" alt="icon workbench" class="img_competences" id="workbench"/>
                            <img src="./img/icon/php.png" alt="icon php" class="img_competences" id="php"/>
                            <img src="./img/icon/laravel.png" alt="icon laravel" class="img_competences" id="laravel"/>
                            <img src="./img/icon/git.png" alt="icon Git" class="img_competences" id="Git"/>
                            <img src="./img/icon/gitlab.png" alt="icon gitlab" class="img_competences" id="gitlab"/>
                            <img src="./img/icon/github.png" alt="icon Github" class="img_competences" id="Github"/>
                            <img width="80" height="80"  src="./img/icon/wordpress.png" alt="icon wordpress" class="img_competences" id="wordpress"/>
                            <img width="80" height="80"  src="./img/icon/o2switch.png" alt="icon o2switch" class="img_competences" id="o2switch"/>
                        </div>

                        <small>Icons made by : <a href="https://www.flaticon.com/fr/auteurs/pixel-perfect">Pixel Perfect</a>,
                            <a href="https://www.flaticon.com/authors/freepik">Freepik</a>,
                            <a href="https://www.flaticon.com/authors/phatplus">Phatplus</a>,
                            <a href="https://www.flaticon.com/authors/vitaly-gorbachev">Vitaly Gorbachev</a>
                        </small>
                    </div>
                </section>

                <section>
                    <ul className="menu menu3">
                        <li> <a href={url}>Présentation</a> </li>
                        <li> <a href={url}>Compétences</a> </li>
                        <li className='id_li1' id="three"> <a href="#Contact">Expériences</a></li>
                        <li> <a href={url}>Contact</a></li>
                    </ul>
                    <div id="experiences">
                        <p>J'ai eu un parcours atypique qui m'a permis de me forger l'esprit, de gagner en maturité et de
                            m'adapter à toutes situations.
                            De formation juridique (6 ans), je suis passé par l'animation puis j'ai été Gendarme. Cela m'a
                            valut une expérience hors du commun mais en paralèlle,
                            j'ai toujours accordé du temps à ma passion pour le développement Web.
                            Depuis quelques années je peux m'y consacrer plus amplement.
                        </p>
                        <div className="slider">
                            <div className="slides animateSlides">
                                <input type="radio" name="radio-btn" id="rad1" />
                                <input type="radio" name="radio-btn" id="rad2" />
                                <input type="radio" name="radio-btn" id="rad3" />


                                <div className="slide one">
                                    <a href="https://www.mariemollieresophrologie.fr/">
                                        <img src="./img/Marie MOLLIERE 2.png" alt="Site sophrologie Marie MOLLIERE" /></a>

                                </div>

                                <div className="slide two">
                                    <a href="https://github.com/DaleCooper59/PortfolioChris">
                                        <img src="./img/twin_peaks.jpg" alt="Github Projet Portfolio" /></a>
                                </div>

                                <div className="slide three">
                                    <a href="https://github.com/DaleCooper59">
                                        <img src="./img/roman-synkevych-wX2L8L-fGeA-unsplash.jpg" alt="Picture_Taken by Roman SYNKEVYCH : github cat UNSPLASH" /></a>
                                </div>

                            </div>
                            {/*slides*/}

                            <div className="nav_manuel" id="nav_manual">
                                <label for="rad1" className="manuel_btn"></label>
                                <label for="rad2" className="manuel_btn"></label>
                                <label for="rad3" className="manuel_btn"></label>


                            </div>

                        </div>

                        {/*SLIDER */}
                    </div>
                </section>

                <section>
                    <ul className="menu menu4">
                        <li> <a href={url}>Présentation</a> </li>
                        <li> <a href={url}>Compétences</a></li>
                        <li> <a href={url}>Expériences</a></li>
                        <li className='id_li1' id="four"> <a href="#Présentation">Contact</a></li>
                    </ul>
                    <div id="Contact">

                        <ul id="ul-contact">
                            <li>DUVINAGE CHRISTOPHER</li>
                            <li>06 16 95 16 88</li>
                            <li id="mail-contact">duvinagechristopher1@gmail.com</li>
                            <li>www.duvinage-christopher_cv.com</li>
                            <li> <h2>Venez également voir mon profil sur<a href="https://www.codewars.com/users/DaleCooper59"> CODEWARS .</a></h2></li>
                        </ul>
                    </div>
                </section>
            </div>
            </main>
        </>
    );
};

export default Main;