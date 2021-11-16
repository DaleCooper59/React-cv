import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div>
           <button className="openbtn" onClick="openNav()">&#9776; Open Sidebar</button>
           <Sidebar />
        </div>
    );
};

export default Home;