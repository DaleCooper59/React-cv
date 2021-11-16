import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    
    return (
        <div id="mySidebar" className="sidebar">
        <button className="closebtn" onclick="closeNav()">&times;</ button>
            <ul>
                <li>
                    <NavLink exact to="/#presentation" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Présentation</span>
                    </NavLink>
                </li>
            
                <li>
                    <NavLink exact to="/#competences" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Compétences</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/#experiences" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Expérience</span>
                    </NavLink>
                </li>
            
                <li>
                    <NavLink exact to="/#contacts" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Contacts</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

