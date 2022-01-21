import React, { useEffect } from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css";
import img from '../../src/img/MarieMOLLIERE2.png'
import img2 from '../../src/img/roman-synkevych-wX2L8L-fGeA-unsplash.jpg'
import img3 from '../../src/img/twin_peaks.jpg'



const data = [
    {
        id: "1",
        title: "Sophrologie.",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        path: img,
        href: "https://www.mariemollieresophrologie.fr/"
    },
    {
        id: "2",
        title: "Github.",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        path: img2,
        href: "https://github.com/DaleCooper59"
    },
    {
        id: "3",
        title: "Portfolio.",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        path: img3,
        href: "https://github.com/DaleCooper59/PortfolioChris"
    }
]

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slider(){
   
      const hovered = () => {
         document.getElementById('imgSlide').classList.add('hovered'); 
      };

      const leaved = () => {
         document.getElementById('imgSlide').classList.remove('hovered'); 
      };
    
        return (
            
            <AutoplaySlider
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={5000}
                className="fit"  
            >
                {data.map((d) => (
                    <div onMouseOver={hovered} onMouseLeave={leaved} key={d.id} className='slider'>
                        <a href={d.href}>
                            <img  id="imgSlide" src={d.path} />
                        </a>
                        <div className='textHover'>
                            <h3> {d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                    </div>
                ))}

            </AutoplaySlider>

        );
    
};
