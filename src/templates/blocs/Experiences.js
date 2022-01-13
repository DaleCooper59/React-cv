import React from 'react';
import { Element } from "react-scroll";

const Expériences = () => {
    return (
        <section className="section_slide">
        
    <h2 className='blocTitle'>Expériences</h2>
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
    );
};

export default Expériences;