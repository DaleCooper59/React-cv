import React from 'react';
/*import Sidebar from '../components/Sidebar';*/
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Home = () => {
    return (
        <div>
           {/*<button className="openbtn" onClick="openNav()">&#9776; Open Sidebar</button>*/}
           <Header />
           <Main />
           <Footer />
           {/*<Sidebar />*/}
           
        </div>
    );
};

export default Home;