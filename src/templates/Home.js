import React from 'react';
import Sidebar from '../components/Sidebar';
import TsParticles from '../components/TsParticles';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Home = () => {
    return (
        <div>            
           <Sidebar />
           <Header />
           <TsParticles /> 
           <Main />
           <Footer />
           
        </div>
    );
};

export default Home;