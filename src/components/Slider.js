import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css";
import img from '../../src/img/MarieMOLLIERE2.png'
import img2 from '../../src/img/roman-synkevych-wX2L8L-fGeA-unsplash.jpg'
import img3 from '../../src/img/twin_peaks.jpg'

let un, deux, trois;

const data = [
    un={
        id:"1",
        title:"Sophrologie",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        path:img
    }, 
    deux={
        id:"2",
        title:"Github",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        path:img2
    },
    trois={
        id:"3",
        title:"Portfolio",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        path:img3
    }
]
const AutoplaySlider = withAutoplay(AwesomeSlider);
{data.forEach(element => {
    console.log(element.path);
});}


const Slider = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={true} // should stop playing on user interaction
            interval={3000}
        >
            <div data-src="../../../public/img" />
            <div data-src="/path/to/image-1.png" />
            <div data-src="/path/to/image-2.jpg" />
        </AutoplaySlider>
    );
};

export default Slider;