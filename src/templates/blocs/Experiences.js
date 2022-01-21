import React from 'react';
import Slider from '../../components/Slider';

const Expériences = () => {
    return (
        <section className="section_slide">

            <div className="title_section">
                <h2 className='blocTitle' id='title_3'>Expériences</h2>
            </div>


            <div id="experiences">

                <p>J'ai eu un parcours atypique qui m'a permis de me forger l'esprit, de gagner en maturité et de
                    m'adapter à toutes situations.
                    De formation juridique (6 ans), je suis passé par l'animation puis j'ai été Gendarme. Cela m'a
                    valut une expérience hors du commun mais en paralèlle,
                    j'ai toujours accordé du temps à ma passion pour le développement Web.
                    Depuis quelques années je peux m'y consacrer plus amplement.
                </p>
                <Slider />

            </div>
        </section>
    );
};

export default Expériences;