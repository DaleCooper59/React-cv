import React from 'react';
import Competences from './blocs/Competences';
import Contacts from './blocs/Contacts';
import Experiences from './blocs/Experiences';
import Presentation from './blocs/Presentation';



const Main = () => {
    
    return (
        <>
            <main>

            <div className="picture">
                <img id="profile_picture" src="./img/122336553_2739494626292799_6695223732738674342_n.jpg"
                    alt="DUVINAGE Christopher" />

            </div>

            <div id="big_section">
                <Presentation />
                <Competences />
                <Experiences />  
                <Contacts />
                
            </div>
            </main>
        </>
    );
};

export default Main;